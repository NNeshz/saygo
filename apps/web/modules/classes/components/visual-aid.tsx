import React from "react";

interface VisualAidProps {
  children: React.ReactNode;
}

export const VisualAid = ({ children }: VisualAidProps) => {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-4">
      <div className="flex flex-col items-center justify-center space-y-4">
        {children}
      </div>
    </div>
  );
};

export const DemoBox = ({
  label,
  distance,
  count,
}: {
  label: string;
  distance: "near" | "far";
  count: "singular" | "plural";
}) => {
  return (
    <div
      className={`relative p-4 rounded-lg border-2 ${
        distance === "near"
          ? "border-green-400 bg-green-50"
          : "border-orange-400 bg-orange-50 ml-12"
      } w-32 h-32 flex flex-col items-center justify-center transition-all`}
    >
      <div className="text-4xl mb-2">
        {count === "singular" ? "🍎" : "🍎🍎"}
      </div>
      <span className="font-bold text-gray-700 capitalize">{label}</span>
      <span className="text-xs text-gray-500 absolute bottom-2">
        {distance === "near" ? "Close (Here)" : "Far (There)"}
      </span>
    </div>
  );
};
