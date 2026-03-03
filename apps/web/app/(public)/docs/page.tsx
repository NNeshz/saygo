import { DocsVocabulary } from "@saygo/web/modules/landing/docs/docs-vocabulary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SayGo - Vocabulario",
  description:
    "Explora y aprende vocabulario en inglés organizado por categorías. Cada palabra incluye pronunciación, traducción y ejemplos de uso.",
};

export default function DocsPage() {
  return <DocsVocabulary />;
}
