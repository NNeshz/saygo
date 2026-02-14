import type { LessonBlock } from "../content-types";
import { isParagraph, isTable, isExercise } from "../content-types";
import { ContentTable } from "./content-table";
import { StaticExercise } from "./static-exercise";

export function LessonContent({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (isParagraph(block)) {
          return (
            <div key={i} className="text-foreground/90 leading-relaxed">
              {block.content}
            </div>
          );
        }
        if (isTable(block)) {
          return <ContentTable key={i} {...block} />;
        }
        if (isExercise(block)) {
          return <StaticExercise key={i} {...block} />;
        }
        return null;
      })}
    </div>
  );
}
