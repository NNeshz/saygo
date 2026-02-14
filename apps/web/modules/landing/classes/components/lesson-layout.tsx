import Link from "next/link";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import { IconArrowLeft } from "@tabler/icons-react";

type LessonLayoutProps = {
  level: "zero" | "a1" | "a2" | "b1";
  levelLabel: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

const levelPaths: Record<string, string> = {
  zero: "/classes#zero-to-a1",
  a1: "/classes#a1-to-a2",
  a2: "/classes#a2-to-b1",
  b1: "/classes#b1-to-b2",
};

export function LessonLayout({
  level,
  levelLabel,
  title,
  description,
  children,
}: LessonLayoutProps) {
  const backHref = levelPaths[level] ?? "/classes";

  return (
    <section className="min-h-dvh bg-background pt-20 pb-16">
      <MaxWidth className="max-w-3xl space-y-8">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <IconArrowLeft className="size-4" />
          Volver a {levelLabel}
        </Link>

        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none [&_ul]:list-disc [&_ol]:list-decimal">
          {children}
        </div>
      </MaxWidth>
    </section>
  );
}
