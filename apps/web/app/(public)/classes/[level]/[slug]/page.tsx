import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { IconArrowLeft } from "@tabler/icons-react";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import { MarkdownBody } from "@saygo/web/modules/classes/components/markdown-body";
import {
  getAllClassLessonParams,
  getClassLesson,
  inferLessonHeading,
} from "@saygo/web/modules/classes/lib/lessons";

type Props = { params: Promise<{ level: string; slug: string }> };

export function generateStaticParams() {
  return getAllClassLessonParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { level, slug } = await params;
  const lesson = getClassLesson(level, slug);
  if (!lesson) {
    return { title: "Clase no encontrada | Saygo" };
  }
  const heading = inferLessonHeading(lesson.content, lesson.meta.title);
  return {
    title: `${heading} | Saygo`,
    description: `Material de clase — ${level}`,
  };
}

export default async function ClassLessonPage({ params }: Props) {
  const { level, slug } = await params;
  const lesson = getClassLesson(level, slug);
  if (!lesson) notFound();

  const heading = inferLessonHeading(lesson.content, lesson.meta.title);

  return (
    <section className="min-h-dvh bg-background pb-24 pt-20">
      <MaxWidth className="max-w-3xl space-y-10">
        <div className="space-y-6">
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <IconArrowLeft className="size-4 shrink-0" />
            Volver a clases
          </Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-citrus-zest">
            {lesson.meta.level}
          </p>
        </div>

        <MarkdownBody content={lesson.content} />

        <footer className="border-t border-border pt-8 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{heading}</span>
          <span className="mx-2 text-border">·</span>
          <span className="capitalize">{lesson.meta.level}</span>
        </footer>
      </MaxWidth>
    </section>
  );
}
