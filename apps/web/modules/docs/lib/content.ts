import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import type { DocFrontmatter, DocItem, DocMeta, DocSection } from "../types/docs.types"
import type { PracticeData } from "../types/practice.types"

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
    submodule: fm.submodule,
    duration: fm.duration,
    objectives: fm.objectives,
  }
}

function readDocItems(dir: string, parentSlug: string[]): DocItem[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((file) =>
      parseDocFile(path.join(dir, file), [...parentSlug, path.basename(file, ".md")])
    )
    .sort((a, b) => a.order - b.order)
}

/** Una clase dividida en submódulos: carpeta con _meta.json dentro del nivel. */
function readModuleItem(dir: string, slug: string[]): DocItem | null {
  const meta = readMeta(dir)
  if (!meta) return null
  return {
    title: meta.title,
    description: meta.description,
    slug,
    href: `/docs/${slug.join("/")}`,
    order: meta.order ?? 99,
    hours: meta.hours,
    children: readDocItems(dir, slug),
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

    const modules = fs
      .readdirSync(sectionDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => readModuleItem(path.join(sectionDir, d.name), [entry.name, d.name]))
      .filter((item): item is DocItem => item !== null)

    const items: DocItem[] = [...readDocItems(sectionDir, [entry.name]), ...modules].sort(
      (a, b) => a.order - b.order
    )

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

export function getPracticeBySlug(slug: string[]): PracticeData | null {
  const filePath = path.join(CONTENT_DIR, ...slug) + ".exercises.json"
  if (!fs.existsSync(filePath)) return null
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8")) as PracticeData
  } catch {
    return null
  }
}

export function getSectionByKey(key: string): DocSection | null {
  return getDocTree().find((s) => s.key === key) ?? null
}

/** Módulo con submódulos (ej. ["zero", "15-futuros"]), o null si el slug es una lección. */
export function getModuleBySlug(slug: string[]): DocItem | null {
  const section = getSectionByKey(slug[0] ?? "")
  const href = `/docs/${slug.join("/")}`
  return section?.items.find((item) => item.children && item.href === href) ?? null
}

export function getAllDocSlugs(): string[][] {
  const tree = getDocTree()
  const slugs: string[][] = []
  for (const section of tree) {
    slugs.push([section.key])
    for (const item of section.items) {
      slugs.push(item.slug)
      for (const child of item.children ?? []) {
        slugs.push(child.slug)
      }
    }
  }
  return slugs
}

/** Lecciones en orden de lectura; los módulos se reemplazan por sus submódulos. */
export function getDocFlatList(): DocItem[] {
  return getDocTree().flatMap((s) =>
    s.items.flatMap((item) => item.children ?? [item])
  )
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
