import type { LessonBlock } from "../content-types";
import {
  isParagraph,
  isTable,
  isExercise,
  isVocabulary,
  getSectionAnchor,
} from "../content-types";
import { ContentTable } from "./content-table";
import { StaticExercise } from "./static-exercise";
import { VocabularyList } from "./vocabulary-list";

function BlockWrapper({
  block,
  index,
  children,
}: {
  block: LessonBlock;
  index: number;
  children: React.ReactNode;
}) {
  const section = "section" in block ? block.section : undefined;
  const id = section ? getSectionAnchor(section) : undefined;

  if (id) {
    return (
      <section key={index} id={id} className="scroll-mt-24">
        {children}
      </section>
    );
  }
  return <>{children}</>;
}

export function LessonContent({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        const content = (() => {
          if (isParagraph(block)) {
            return (
              <div className="text-foreground/90 leading-relaxed">
                {block.content}
              </div>
            );
          }
          if (isTable(block)) {
            return <ContentTable {...block} />;
          }
          if (isExercise(block)) {
            return <StaticExercise {...block} />;
          }
          if (isVocabulary(block)) {
            return <VocabularyList {...block} />;
          }
          return null;
        })();

        return content ? (
          <BlockWrapper key={i} block={block} index={i}>
            {content}
          </BlockWrapper>
        ) : null;
      })}
    </div>
  );
}
