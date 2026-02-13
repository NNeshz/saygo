"use client";

import { MaxWidth } from "@/modules/global/components/max-widht";
import {
  GuidedOnboardingCard,
  RealTimeDataCard,
  TrustedByCard,
  BuiltToScaleCard,
} from "./information-cards";
import { RevealParagraph } from "./reveal-paragraph";

export function Information() {
  return (
    <section className="relative w-full px-6 py-32 bg-background">
      <div className="flex flex-col gap-16">
        <MaxWidth className="max-w-5xl">
          <RevealParagraph />
        </MaxWidth>
        <MaxWidth className="max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4">
            <GuidedOnboardingCard />
            <RealTimeDataCard />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TrustedByCard />
              <BuiltToScaleCard />
            </div>
          </div>
        </MaxWidth>
      </div>
    </section>
  );
}
