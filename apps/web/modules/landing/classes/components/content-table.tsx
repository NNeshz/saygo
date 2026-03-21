import type { TableBlock } from "../content-types";
import { cn } from "@saygo/ui/src/lib/utils";

export function ContentTable({ caption, headers, rows }: TableBlock) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border/60 bg-card/50 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] text-sm">
          {caption && (
            <caption className="border-b border-border/60 bg-muted/30 px-4 py-3 text-left text-base font-semibold tracking-tight text-citrus-zest">
              {caption}
            </caption>
          )}
          <thead>
            <tr className="border-b border-border/60 bg-muted/25">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  "border-b border-border/50 last:border-0",
                  i % 2 === 0 ? "bg-transparent" : "bg-muted/5",
                )}
              >
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-2.5 text-foreground/90">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
