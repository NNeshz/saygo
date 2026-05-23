import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import {
  getAllDocSlugs,
  getDocBySlug,
  getAdjacentDocs,
  getSectionByKey,
} from "@/modules/docs"
import { Markdown, DocsPrevNext, LevelIndex } from "@/modules/docs"
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
          <Markdown content={doc.content} />
        </article>

        <DocsPrevNext prev={prev} next={next} />
      </div>

      {/* Right TOC */}
      <aside className="hidden xl:block w-44 shrink-0">
        <div className="sticky top-20">
          <TableOfContents headings={headings} />
        </div>
      </aside>
    </div>
  )
}
