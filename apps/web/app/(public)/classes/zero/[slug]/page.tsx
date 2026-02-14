import { notFound } from "next/navigation";
import { LessonLayout } from "@saygo/web/modules/landing/classes/components/lesson-layout";
import { LessonContent } from "@saygo/web/modules/landing/classes/components/lesson-content";
import { getZeroLesson, getZeroLessonSlugs } from "@saygo/web/modules/landing/classes/zero/lessons";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getZeroLessonSlugs().map((slug) => ({ slug }));
}

export default async function ZeroLessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getZeroLesson(slug);
  if (!lesson) notFound();

  return (
    <LessonLayout
      level="zero"
      levelLabel="Zero to A1"
      title={lesson.title}
      description={lesson.description}
    >
      <LessonContent blocks={lesson.blocks} />
    </LessonLayout>
  );
}
