import type { Metadata } from "next";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import { ClassesHeader } from "@saygo/web/modules/classes/components/classes-header";
import { ClassesLevelAccordion } from "@saygo/web/modules/classes/components/classes-level-accordion";
import { getClassLevelPanels } from "@saygo/web/modules/classes/lib/lessons";

export const metadata: Metadata = {
  title: "Clases | Saygo",
  description: "Material por nivel: Zero to A1, A1 to A2, A2 to B1 y B1 to B2.",
};

export default function ClassesIndexPage() {
  const panels = getClassLevelPanels();

  return (
    <>
      <ClassesHeader />

      <section id="niveles" className="scroll-mt-20 bg-background pb-24 pt-16">
        <MaxWidth className="max-w-3xl space-y-10">
          <header className="space-y-2 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-citrus-zest">
              Tu ruta
            </p>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Elige un nivel
            </h2>
            <p className="mx-auto max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground sm:mx-0">
              Despliega cada bloque para ver las lecciones.
            </p>
          </header>

          <ClassesLevelAccordion levels={panels} />
        </MaxWidth>
      </section>
    </>
  );
}
