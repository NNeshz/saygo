import React from "react";

interface GrammarTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  title?: string;
  notes?: string;
}

export const GrammarTable = ({
  headers,
  rows,
  title,
  notes,
}: GrammarTableProps) => {
  return (
    <div className="my-6">
      {title && (
        <h4 className="text-md font-bold text-gray-700 mb-2">{title}</h4>
      )}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 font-semibold uppercase">
            <tr>
              {headers.map((header, idx) => (
                <th key={idx} className="px-6 py-3 border-b border-gray-200">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="hover:bg-gray-50/50 transition-colors"
              >
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="px-6 py-4 text-gray-800">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {notes && (
        <p className="mt-2 text-xs text-gray-500 bg-yellow-50 p-2 rounded border border-yellow-100 inline-block">
          💡 {notes}
        </p>
      )}
    </div>
  );
};
