import type { VocabularyBlock } from "../content-types";

export function VocabularyList({ title, items }: VocabularyBlock) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-card/50 shadow-sm">
      <div className="px-5 py-5 sm:px-6 sm:py-6">
        {title && (
          <h4 className="mb-5 border-b border-border/60 pb-3 text-base font-semibold leading-snug text-citrus-zest">
            {title}
          </h4>
        )}
        <dl className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-0.5 border-b border-border/40 py-3 last:border-0 sm:flex-row sm:items-baseline sm:gap-3"
            >
              <dt className="shrink-0 font-mono text-sm font-medium text-foreground sm:w-[42%]">
                {item.en}
              </dt>
              <dd className="text-sm text-muted-foreground sm:flex-1 sm:text-foreground/85">
                {item.es}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
