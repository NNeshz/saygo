import type { TableBlock } from "../content-types";
import { cn } from "@saygo/ui/src/lib/utils";

export function ContentTable({ caption, headers, rows }: TableBlock) {
  return (
    <figure className="my-6 overflow-x-auto rounded-lg border border-border bg-muted/20">
      <table className="w-full min-w-[280px] text-sm">
        {caption && (
          <caption className="px-4 py-2 text-left text-sm font-medium text-foreground border-b border-border">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="border-b border-border bg-muted/40">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-semibold text-foreground"
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
                "border-b border-border/70",
                i % 2 === 0 ? "bg-background" : "bg-muted/10",
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
    </figure>
  );
}
