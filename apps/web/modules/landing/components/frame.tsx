"use client";

import { ReactNode, useState, useMemo } from "react";
import { cn } from "@saygo/ui/src/lib/utils";
import { ScrollProvider } from "../context/scroll-context";

export function Frame({ children }: { children: ReactNode }) {
  const [scrollElement, setScrollElement] = useState<HTMLDivElement | null>(
    null,
  );
  // Create a stable ref object that updates when state changes
  // We need to cast it to match RefObject interface which usually expects current to be readonly or mutable depending on usage
  const scrollRef = useMemo(
    () => ({ current: scrollElement }),
    [scrollElement],
  );

  return (
    <div className="h-dvh w-screen bg-background p-0 md:p-2 flex flex-col overflow-hidden">
      <div
        className={cn(
          "flex-1 relative w-full overflow-hidden",
          "bg-background rounded-4xl",
          "border-0 md:border-4 border-background", // Double border effect for bezel? No, simple border.
        )}
      >
        <ScrollProvider value={{ scrollRef }}>
          <div
            ref={setScrollElement}
            className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide"
          >
            {children}
          </div>
        </ScrollProvider>
      </div>
    </div>
  );
}
