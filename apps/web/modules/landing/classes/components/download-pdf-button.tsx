"use client";

import { Button } from "@saygo/ui/src/components/button";
import { IconDownload } from "@tabler/icons-react";

type DownloadPdfButtonProps = {
  title: string;
};

export function DownloadPdfButton({ title }: DownloadPdfButtonProps) {
  const handleDownload = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const content = document.querySelector(".prose");
    if (!content) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title} - Saygo</title>
          <style>
            body {
              font-family: system-ui, -apple-system, sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 40px 20px;
              line-height: 1.6;
              color: #1a1a1a;
            }
            h1 { font-size: 24px; margin-bottom: 24px; }
            h2 { font-size: 20px; margin-top: 32px; margin-bottom: 16px; }
            h3 { font-size: 18px; margin-top: 24px; margin-bottom: 12px; }
            p { margin-bottom: 16px; }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 16px 0;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px 12px;
              text-align: left;
            }
            th { background: #f5f5f5; font-weight: 600; }
            ul, ol { margin-bottom: 16px; padding-left: 24px; }
            li { margin-bottom: 4px; }
            @media print {
              body { padding: 0; }
            }
          </style>
        </head>
        <body>
          <h1>${title}</h1>
          ${content.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <Button variant="outline" size="sm" onClick={handleDownload}>
      <IconDownload className="size-4" />
      Descargar PDF
    </Button>
  );
}
