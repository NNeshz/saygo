import type { VocabularyBlock } from "../content-types";

export function VocabularyList({ title, items }: VocabularyBlock) {
  return (
    <div className="my-6 rounded border border-border bg-card shadow-sm overflow-hidden">
      <div className="px-4 py-4">
        {title && (
          <h4 className="mb-4 text-lg font-bold uppercase tracking-tight text-citrus-zest border-b border-border pb-2">
            {title}
          </h4>
        )}
        <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 py-1.5 border-b border-border/50 last:border-0"
            >
              <dt className="font-medium text-sm text-foreground shrink-0 sm:w-1/2">
                {item.en}
              </dt>
              <dd className="text-muted-foreground text-xs sm:text-foreground/80">
                {item.es}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
