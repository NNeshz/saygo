import { Hero } from "@saygo/web/modules/landing/classes/hero";
import { Zero } from "@saygo/web/modules/landing/classes/zero";
import { A1 } from "@saygo/web/modules/landing/classes/a1";
import { A2 } from "@saygo/web/modules/landing/classes/a2";
import { B1 } from "@saygo/web/modules/landing/classes/b1";
import { ScrollToSection } from "@saygo/web/modules/landing/classes/scroll-to-section";

export default function ClassesPage() {
  return (
    <>
      <ScrollToSection />
      <Hero />
      <Zero />
      <A1 />
      <A2 />
      <B1 />
    </>
  );
}