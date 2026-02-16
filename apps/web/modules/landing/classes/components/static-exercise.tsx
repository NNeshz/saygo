"use client";

import type { ExerciseBlock } from "../content-types";

export function StaticExercise({ title, items }: ExerciseBlock) {
  return (
    <div className="my-6 rounded border border-border bg-card shadow-sm overflow-hidden">
      <div className="px-4 py-4">
        {title && (
          <h4 className="mb-4 text-lg font-bold uppercase tracking-tight text-citrus-zest border-b border-border pb-2">
            {title}
          </h4>
        )}
        <ol className="space-y-4 list-decimal list-outside pl-5 marker:font-medium marker:text-foreground/70">
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
