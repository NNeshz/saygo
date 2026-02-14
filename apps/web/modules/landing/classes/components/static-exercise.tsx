"use client";

import type { ExerciseBlock } from "../content-types";

export function StaticExercise({ title, items }: ExerciseBlock) {
  return (
    <div className="my-8 rounded border border-border bg-card shadow-sm overflow-hidden">
      <div className="px-4 py-4">
        {title && (
          <h4 className="mb-5 text-lg font-bold uppercase tracking-tight text-foreground border-b border-border pb-2">
            {title}
          </h4>
        )}
        <ol className="space-y-5 list-decimal list-outside pl-6 marker:font-medium marker:text-foreground/70">
          {items.map((item, i) => (
            <li key={i} className="pl-2 space-y-1.5">
              {item.instruction && (
                <p className="text-sm text-muted-foreground -mt-0.5">
                  {item.instruction}
                </p>
              )}
              <p className="text-foreground leading-relaxed">
                {item.question}
              </p>
              {item.answer != null && (
                <details className="mt-2">
                  <summary className="cursor-pointer text-sm font-medium text-citrus-zest hover:underline inline-block">
                    Ver respuesta
                  </summary>
                  <p className="mt-2 rounded-lg bg-muted/60 px-3 py-2.5 text-sm text-foreground/90 border border-border/50">
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
