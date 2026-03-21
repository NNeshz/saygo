"use client";

import type { ExerciseBlock } from "../content-types";

export function StaticExercise({ title, items }: ExerciseBlock) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-card/50 shadow-sm">
      <div className="px-5 py-5 sm:px-6 sm:py-6">
        {title && (
          <h4 className="mb-5 border-b border-border/60 pb-3 text-base font-semibold leading-snug text-citrus-zest">
            {title}
          </h4>
        )}
        <ol className="list-outside list-decimal space-y-5 pl-5 marker:font-semibold marker:text-muted-foreground">
          {items.map((item, i) => (
            <li key={i} className="pl-2 space-y-1">
              {item.instruction && (
                <p className="text-xs text-muted-foreground">
                  {item.instruction}
                </p>
              )}
              <p className="text-sm text-foreground leading-relaxed">
                {item.question}
              </p>
              {item.answer != null && (
                <details className="mt-1.5">
                  <summary className="cursor-pointer text-xs font-medium text-citrus-zest hover:underline inline-block">
                    Ver respuesta
                  </summary>
                  <p className="mt-1.5 rounded-lg bg-muted/60 px-3 py-2 text-sm text-foreground/90 border border-border/50">
                    {item.answer}
                  </p>
                </details>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
