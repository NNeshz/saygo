import type { VocabularyBlock } from "../content-types";

export function VocabularyList({ title, items }: VocabularyBlock) {
  return (
    <div className="my-6 rounded border border-border bg-card shadow-sm overflow-hidden">
      <div className="px-6 py-5 sm:px-8 sm:py-6">
        {title && (
          <h4 className="mb-4 text-xs font-bold uppercase tracking-tight text-foreground border-b border-border pb-2">
            {title}
          </h4>
        )}
        <dl className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 py-2 border-b border-border/50 last:border-0"
            >
              <dt className="font-medium text-foreground shrink-0 sm:w-1/2">
                {item.en}
              </dt>
              <dd className="text-muted-foreground text-sm sm:text-foreground/80">
                {item.es}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
