import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getAllDocSlugs, getDocBySlug, getAdjacentDocs, getSectionByKey } from "@/modules/docs"
import { Markdown, DocsPrevNext, LevelIndex } from "@/modules/docs"
import Link from "next/link"

export const dynamicParams = false

type Props = {
  params: Promise<{ slug: string[] }>
}

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

  // Level index: /docs/a1
  if (slug.length === 1) {
    const section = getSectionByKey(slug[0])
    if (!section) notFound()
    return <LevelIndex section={section} />
  }

  // Lesson page: /docs/a1/01-greetings
  const doc = getDocBySlug(slug)
  if (!doc) notFound()

  const { prev, next } = getAdjacentDocs(slug)
  const sectionKey = slug[0]
  const section = getSectionByKey(sectionKey)

  return (
    <div className="max-w-3xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
        <Link href="/docs" className="hover:text-foreground transition-colors">
          Clases
        </Link>
        <span>/</span>
        {section && (
          <>
            <Link
              href={section.href}
              className="hover:text-foreground transition-colors"
            >
              {section.label}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-foreground">{doc.frontmatter.title}</span>
      </div>

      {/* Content */}
      <article>
        <Markdown content={doc.content} />
      </article>

      {/* Prev / Next */}
      <DocsPrevNext prev={prev} next={next} />
    </div>
  )
}
