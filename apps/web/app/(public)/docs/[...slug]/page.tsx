import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import {
  getAllDocSlugs,
  getDocBySlug,
  getAdjacentDocs,
  getSectionByKey,
} from "@/modules/docs"
import { Markdown, DocsPrevNext, LevelIndex, DownloadDropdown } from "@/modules/docs"
import { TableOfContents } from "@/modules/docs/components/table-of-contents"
import { extractHeadings } from "@/modules/docs/lib/headings"

export const dynamicParams = false

type Props = { params: Promise<{ slug: string[] }> }

export async function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (slug.length === 1) {
    const section = getSectionByKey(slug[0])
    if (!section) return {}
    return { title: `${section.label} | SayGo` }
  }
  const doc = getDocBySlug(slug)
  if (!doc) return {}
  return {
    title: `${doc.frontmatter.title} | SayGo`,
    description: doc.frontmatter.description,
  }
}

function splitAtH1(content: string): { h1: string; rest: string } {
  const lines = content.split("\n")
  const idx = lines.findIndex((l) => l.startsWith("# "))
  if (idx === -1) return { h1: "", rest: content }
  return {
    h1: lines[idx].replace(/^#\s+/, ""),
    rest: lines.slice(idx + 1).join("\n").trimStart(),
  }
}

export default async function DocsSlugPage({ params }: Props) {
  const { slug } = await params

  // ── Level index: /docs/a1 ────────────────────────────────────────────────
  if (slug.length === 1) {
    const section = getSectionByKey(slug[0])
    if (!section) notFound()
    return <LevelIndex section={section} />
  }

  // ── Lesson page: /docs/a1/01-greetings ──────────────────────────────────
  const doc = getDocBySlug(slug)
  if (!doc) notFound()

  const { prev, next } = getAdjacentDocs(slug)
  const section = getSectionByKey(slug[0])
  const headings = extractHeadings(doc.content)
  const { h1, rest } = splitAtH1(doc.content)

  return (
    <div className="flex gap-10 xl:gap-16">
      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Clases
          </Link>
          {section && (
            <>
              <span>/</span>
              <Link
                href={section.href}
                className="hover:text-foreground transition-colors"
              >
                {section.label}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-foreground truncate">{doc.frontmatter.title}</span>
        </div>

        <article>
          {h1 && (
            <h1 className="text-3xl font-bold tracking-tight mt-2 mb-3">{h1}</h1>
          )}
          <DownloadDropdown title={doc.frontmatter.title} slug={slug} />
          <Markdown content={rest} />
        </article>

        <DocsPrevNext prev={prev} next={next} />
      </div>

      {/* Right TOC */}
      <aside className="hidden xl:block w-48 shrink-0">
        <div className="sticky top-20 h-[calc(100vh-5rem)] pt-8 pb-4">
          <TableOfContents headings={headings} />
        </div>
      </aside>
    </div>
  )
}
