import React from "react";

interface LessonSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const LessonSection = ({
  title,
  subtitle,
  children,
  icon,
}: LessonSectionProps) => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gray-50/50 p-6 border-b border-gray-100 flex items-center gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
        </div>
      </div>
      <div className="p-6 md:p-8 space-y-6">{children}</div>
    </section>
  );
};
