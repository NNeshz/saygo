import React from "react";

interface ExerciseItem {
  question: string;
  placeholder?: string;
  type?: "fill-in" | "select" | "translate";
}

interface ExerciseCardProps {
  title: string;
  instructions: string;
  items: ExerciseItem[];
}

export const ExerciseCard = ({
  title,
  instructions,
  items,
}: ExerciseCardProps) => {
  return (
    <div className="bg-white border-2 border-dashed border-indigo-200 rounded-xl p-6 bg-indigo-50/20">
      <div className="mb-4">
        <h3 className="font-bold text-lg text-indigo-900 flex items-center gap-2">
          <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded">
            PRACTICE
          </span>
          {title}
        </h3>
        <p className="text-gray-600 mt-1">{instructions}</p>
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <span className="font-mono text-gray-400 font-bold min-w-[24px]">
              {idx + 1}.
            </span>
            <div className="flex-grow">
              {item.type === "fill-in" ? (
                <div className="text-gray-800 font-medium">
                  {item.question.split("___").map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="inline-block w-24 border-b-2 border-gray-300 mx-1"></span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <p className="text-gray-800 font-medium">{item.question}</p>
              )}
            </div>
            {item.placeholder && (
              <span className="text-sm text-gray-400 italic">
                ({item.placeholder})
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
