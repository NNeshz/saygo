import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Metadata } from "next";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import { MarkdownBody } from "@saygo/web/modules/classes/components/markdown-body";
import { DownloadPdfButton } from "@saygo/web/modules/classes/components/download-pdf-button";

const CONTENT_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "content.md",
);

export const metadata: Metadata = {
  title: "Repaso Integral A1 | Saygo",
  description:
    "Repaso integral de inglés A1: descripción física, demostrativos, preposiciones, entorno y familia.",
};

export default function RepasoPage() {
  const content = fs.readFileSync(CONTENT_PATH, "utf8");

  return (
    <section className="min-h-dvh bg-background pb-24 pt-20">
      <MaxWidth className="max-w-3xl space-y-10">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-citrus-zest">
              A1
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Repaso Integral
            </h1>
          </div>
          <DownloadPdfButton title="Repaso Integral A1" level="A1" />
        </div>

        <MarkdownBody content={content} dataPdfContent />
      </MaxWidth>
    </section>
  );
}
