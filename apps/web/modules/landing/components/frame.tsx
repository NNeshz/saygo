"use client";

import { ReactNode } from "react";
import { cn } from "@saygo/ui/src/lib/utils";

export function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black p-2 transition-all duration-300">
      <div
        className={cn(
          "relative w-full h-full min-h-[calc(100vh-1rem)] sm:min-h-[calc(100vh-2rem)]",
          "bg-background rounded-3xl overflow-hidden shadow-2xl",
          "border border-border/50",
        )}
      >
        <div className="absolute top-0 left-0 right-0 h-full overflow-y-auto scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
}
