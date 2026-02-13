import React from "react";

interface LessonLayoutProps {
  children: React.ReactNode;
  title: string;
  duration?: string;
  level?: string;
}

export const LessonLayout = ({
  children,
  title,
  duration,
  level,
}: LessonLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            {title}
          </h1>
          <div className="flex justify-center gap-4 text-sm font-medium text-gray-500">
            {duration && (
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                ⏱ {duration}
              </span>
            )}
            {level && (
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">
                📊 {level}
              </span>
            )}
          </div>
        </header>
        <main className="space-y-12">{children}</main>
      </div>
    </div>
  );
};
