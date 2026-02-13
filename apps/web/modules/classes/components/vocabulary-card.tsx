import React from "react";

interface VocabItem {
  english: string;
  spanish: string;
  context?: string;
  icon?: string;
}

interface VocabularyListProps {
  title?: string;
  items: VocabItem[];
  columns?: 1 | 2 | 3;
}

export const VocabularyList = ({
  title,
  items,
  columns = 2,
}: VocabularyListProps) => {
  return (
    <div className="space-y-3">
      {title && (
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      )}
      <div
        className={`grid gap-4 ${
          columns === 1
            ? "grid-cols-1"
            : columns === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-3 bg-indigo-50/30 rounded-lg border border-indigo-100 hover:border-indigo-200 transition-colors"
          >
            {item.icon && <span className="text-xl">{item.icon}</span>}
            <div>
              <p className="font-bold text-indigo-900">{item.english}</p>
              <p className="text-sm text-gray-600 italic">{item.spanish}</p>
              {item.context && (
                <p className="text-xs text-gray-400 mt-1">{item.context}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
