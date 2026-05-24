import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import type { DocFrontmatter, DocItem, DocMeta, DocSection } from "../types/docs.types"

const CONTENT_DIR = path.join(process.cwd(), "content")

function readMeta(dir: string): DocMeta | null {
  const metaPath = path.join(dir, "_meta.json")
  if (!fs.existsSync(metaPath)) return null
  try {
    return JSON.parse(fs.readFileSync(metaPath, "utf-8")) as DocMeta
  } catch {
    return null
  }
}

function parseDocFile(filePath: string, slug: string[]): DocItem {
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data } = matter(raw)
  const fm = data as DocFrontmatter
  return {
    title: fm.title ?? path.basename(filePath, ".md"),
    description: fm.description,
    slug,
    href: `/docs/${slug.join("/")}`,
    order: fm.order ?? 99,
  }
}

export function getDocTree(): DocSection[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const entries = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
  const sections: DocSection[] = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const sectionDir = path.join(CONTENT_DIR, entry.name)
    const meta = readMeta(sectionDir)

    const files = fs
      .readdirSync(sectionDir)
      .filter((f) => f.endsWith(".md") && !f.startsWith("_"))

    const items: DocItem[] = files
      .map((file) => {
        const slug = path.basename(file, ".md")
        return parseDocFile(path.join(sectionDir, file), [entry.name, slug])
      })
      .sort((a, b) => a.order - b.order)

    sections.push({
      label: meta?.title ?? entry.name.toUpperCase(),
      key: entry.name,
      href: `/docs/${entry.name}`,
      description: meta?.description,
      order: meta?.order ?? 99,
      items,
    })
  }

  return sections.sort((a, b) => a.order - b.order)
}

export function getDocBySlug(slug: string[]): {
  frontmatter: DocFrontmatter
  content: string
} | null {
  const filePath = path.join(CONTENT_DIR, ...slug) + ".md"
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  return { frontmatter: data as DocFrontmatter, content }
}

export function getSectionByKey(key: string): DocSection | null {
  return getDocTree().find((s) => s.key === key) ?? null
}

export function getAllDocSlugs(): string[][] {
  const tree = getDocTree()
  const slugs: string[][] = []
  for (const section of tree) {
    slugs.push([section.key])
    for (const item of section.items) {
      slugs.push(item.slug)
    }
  }
  return slugs
}

export function getDocFlatList(): DocItem[] {
  return getDocTree().flatMap((s) => s.items)
}

export function getAdjacentDocs(slug: string[]): {
  prev: DocItem | null
  next: DocItem | null
} {
  const flat = getDocFlatList()
  const href = `/docs/${slug.join("/")}`
  const idx = flat.findIndex((d) => d.href === href)
  return {
    prev: idx > 0 ? (flat[idx - 1] ?? null) : null,
    next: idx < flat.length - 1 ? (flat[idx + 1] ?? null) : null,
  }
}
