"use client";

import type { ExerciseBlock } from "../content-types";
import { cn } from "@saygo/ui/src/lib/utils";

export function StaticExercise({ title, items }: ExerciseBlock) {
  return (
    <div className="my-6 rounded-xl border border-border bg-muted/20 p-5">
      {title && (
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
          {title}
        </h4>
      )}
      <ol className="space-y-4 list-decimal list-inside">
        {items.map((item, i) => (
          <li key={i} className="space-y-1">
            {item.instruction && (
              <p className="text-sm text-muted-foreground">{item.instruction}</p>
            )}
            <p className="text-foreground">{item.question}</p>
            {item.answer != null && (
              <details className="group mt-1">
                <summary className="cursor-pointer text-sm font-medium text-citrus-zest hover:underline">
                  Ver respuesta
                </summary>
                <p className="mt-2 rounded-md bg-muted/50 px-3 py-2 text-sm text-foreground/90">
                  {item.answer}
                </p>
              </details>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
