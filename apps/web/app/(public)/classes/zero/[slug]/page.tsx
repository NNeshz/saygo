import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import { DownloadPdfButton } from "@saygo/web/modules/landing/classes/components/download-pdf-button";
import { ContentTable } from "@saygo/web/modules/landing/classes/components/content-table";
import { StaticExercise } from "@saygo/web/modules/landing/classes/components/static-exercise";
import { VocabularyList } from "@saygo/web/modules/landing/classes/components/vocabulary-list";
import {
  getSectionAnchor,
  isExercise,
  isParagraph,
  isTable,
  isVocabulary,
  type LessonBlock,
  type LessonContent,
} from "@saygo/web/modules/landing/classes/content-types";
import { getZeroLesson, getZeroLessonSlugs } from "@saygo/web/modules/landing/classes/zero/lessons";

type Props = { params: Promise<{ slug: string }> };

const LEVEL_LABEL = "Zero to A1";
const BACK_HREF = "/classes#zero-to-a1";

/** Contenedor de impresión / PDF: debe coincidir con el selector en DownloadPdfButton */
const PRINT_ROOT_CLASS = "lesson-print-root";

function BlockSection({
  block,
  children,
}: {
  block: LessonBlock;
  children: ReactNode;
}) {
  const section = "section" in block ? block.section : undefined;
  const id = section ? getSectionAnchor(section) : undefined;

  if (id) {
    return (
      <section id={id} className="scroll-mt-28">
        {children}
      </section>
    );
  }
  return <>{children}</>;
}

function ZeroLessonBlocks({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, i) => {
        const inner = (() => {
          if (isParagraph(block)) {
            return (
              <div
                className={
                  "text-foreground/90 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-citrus-zest " +
                  "[&_h2:first-child]:mt-0 [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-citrus-zest " +
                  "[&_p]:mb-4 [&_p]:leading-relaxed [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5 " +
                  "[&_strong]:font-semibold [&_strong]:text-foreground"
                }
              >
                {block.content}
              </div>
            );
          }
          if (isTable(block)) return <ContentTable {...block} />;
          if (isExercise(block)) return <StaticExercise {...block} />;
          if (isVocabulary(block)) return <VocabularyList {...block} />;
          return null;
        })();

        if (!inner) return null;

        return (
          <BlockSection key={i} block={block}>
            {inner}
          </BlockSection>
        );
      })}
    </div>
  );
}

function ZeroLessonView({ lesson }: { lesson: LessonContent }) {
  return (
    <section className="min-h-dvh bg-background pb-20 pt-20">
      <MaxWidth className="max-w-3xl">
        <div className="mb-12 space-y-8">
          <Link
            href={BACK_HREF}
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <IconArrowLeft className="size-4 shrink-0" />
            Volver a {LEVEL_LABEL}
          </Link>

          <header className="grid grid-cols-1 gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-10">
            <div className="min-w-0 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-citrus-zest/90">
                Nivel zero
              </p>
              <h1 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {lesson.title}
              </h1>
              {lesson.description ? (
                <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {lesson.description}
                </p>
              ) : null}
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:items-end sm:pt-1">
              <DownloadPdfButton
                title={lesson.title}
                description={lesson.description}
              />
            </div>
          </header>
        </div>

        <article className={`${PRINT_ROOT_CLASS} space-y-10`}>
          <ZeroLessonBlocks blocks={lesson.blocks} />
        </article>
      </MaxWidth>
    </section>
  );
}

export async function generateStaticParams() {
  return getZeroLessonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getZeroLesson(slug);
  if (!lesson) {
    return {
      title: "Saygo - Clases - Zero",
      description: "Conoce nuestros temarios para cada nivel de inglés",
    };
  }
  return {
    title: `${lesson.title} | Saygo`,
    description:
      lesson.description ?? "Conoce nuestros temarios para cada nivel de inglés",
  };
}

export default async function ZeroLessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getZeroLesson(slug);
  if (!lesson) notFound();

  return <ZeroLessonView lesson={lesson} />;
}
