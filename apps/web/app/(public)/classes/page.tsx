import type { Metadata } from "next";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import { ClassesHeader } from "@saygo/web/modules/classes/components/classes-header";
import { ClassesLevels } from "@saygo/web/modules/classes/components/classes-levels";

export const metadata: Metadata = {
  title: "Clases | Saygo",
  description: "Material por nivel.",
};

export default function ClassesIndexPage() {

  return (
    <>
      <ClassesHeader />

      <section id="niveles" className="scroll-mt-20 bg-background pb-24 pt-16">
        <MaxWidth className="max-w-3xl space-y-10">
          <ClassesLevels />
        </MaxWidth>
      </section>
    </>
  );
}
