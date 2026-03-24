"use client";

import { useCallback } from "react";
import { IconDownload } from "@tabler/icons-react";

type DownloadPdfButtonProps = {
  title: string;
  level: string;
};

const GEIST_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap";

const PRINT_CSS = `
@import url("${GEIST_FONT_URL}");

@page {
  size: A4;
  margin: 14mm 14mm 14mm 14mm;
}

*, *::before, *::after {
  box-sizing: border-box;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Geist", sans-serif;
  font-size: 9.5pt;
  line-height: 1.35;
  color: #1a1a1a;
  background: #fff;
}

/* ── Header ── */
.pdf-header {
  margin-bottom: 14pt;
  padding-bottom: 8pt;
  border-bottom: 2pt solid #222;
}
.pdf-header .level {
  font-family: "Geist", sans-serif;
  font-size: 7.5pt;
  font-weight: 700;
  letter-spacing: 2pt;
  text-transform: uppercase;
  color: #666;
  margin: 0 0 3pt;
}
.pdf-header .title {
  font-size: 17pt;
  font-weight: 700;
  margin: 0;
  line-height: 1.15;
  color: #111;
}
.pdf-footer-line {
  font-family: "Geist", sans-serif;
  font-size: 7pt;
  color: #999;
  margin-top: 4pt;
}

/* ── Typography ── */
h1 { font-size: 15pt; font-weight: 700; margin: 12pt 0 5pt; line-height: 1.2; color: #111; }
h2 { font-size: 12.5pt; font-weight: 700; margin: 10pt 0 4pt; padding-bottom: 2pt; border-bottom: 1px solid #ddd; color: #111; }
h3 { font-size: 10.5pt; font-weight: 700; margin: 8pt 0 3pt; color: #222; }
h4 { font-size: 9.5pt; font-weight: 700; margin: 6pt 0 2pt; color: #333; }
h5, h6 { font-size: 9pt; font-weight: 700; margin: 5pt 0 2pt; color: #444; }

p { margin: 3pt 0; orphans: 3; widows: 3; }

strong { font-weight: 700; }
em { font-style: italic; }

a { color: #1a1a1a; text-decoration: underline; }

blockquote {
  margin: 5pt 0;
  padding: 4pt 10pt;
  border-left: 2.5pt solid #ccc;
  font-style: italic;
  color: #444;
  background: #f9f9f9;
}

hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 8pt 0;
}

/* ── Lists ── */
ul, ol {
  margin: 3pt 0 3pt 16pt;
  padding: 0;
}
li {
  margin: 1.5pt 0;
  line-height: 1.35;
}

/* ── Tables ── */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 5pt 0;
  font-size: 8.5pt;
  page-break-inside: avoid;
}
thead {
  background: #f4f4f4;
}
th, td {
  border: 1px solid #ccc;
  padding: 3pt 6pt;
  text-align: left;
  vertical-align: top;
}
th {
  font-weight: 700;
  font-family: "Geist", sans-serif;
  font-size: 8pt;
  color: #333;
}
tr:nth-child(even) {
  background: #fafafa;
}

/* ── Code ── */
code {
  font-family: "Menlo", "Courier New", monospace;
  font-size: 8.5pt;
  background: #f4f4f4;
  padding: 0.5pt 3pt;
  border-radius: 2pt;
}
pre {
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 3pt;
  padding: 6pt 8pt;
  overflow-x: visible;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 8pt;
  line-height: 1.35;
  margin: 5pt 0;
  page-break-inside: avoid;
}
pre code {
  background: none;
  padding: 0;
  font-size: inherit;
}

/* ── Images ── */
img {
  max-width: 100%;
  height: auto;
  page-break-inside: avoid;
}

/* ── Checkboxes ── */
input[type="checkbox"] {
  margin-right: 4pt;
  vertical-align: middle;
}

/* ── Page-break hints ── */
h1, h2, h3, h4 {
  page-break-after: avoid;
}
table, pre, blockquote {
  page-break-inside: avoid;
}

/* ── Remove wrapper div styling artifacts ── */
.table-wrap {
  margin: 5pt 0;
}
`;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function DownloadPdfButton({ title, level }: DownloadPdfButtonProps) {
  const handleClick = useCallback(() => {
    const article = document.querySelector<HTMLElement>(
      "[data-pdf-content]",
    );
    if (!article) return;

    const clone = article.cloneNode(true) as HTMLElement;

    // Unwrap table wrapper divs but keep the tables
    clone.querySelectorAll("div").forEach((div) => {
      if (div.querySelector("table")) {
        div.classList.add("table-wrap");
      }
    });

    const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)}</title>
<style>${PRINT_CSS}</style>
</head>
<body>
<div class="pdf-header">
  <p class="level">${escapeHtml(level)}</p>
  <h1 class="title">${escapeHtml(title)}</h1>
</div>
${clone.innerHTML}
<div class="pdf-footer-line">Saygo &middot; ${escapeHtml(title)}</div>
</body>
</html>`;

    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.write(html);
    printWindow.document.close();

    // Wait for content to render, then trigger print
    printWindow.addEventListener("afterprint", () => {
      printWindow.close();
    });

    // Small delay to ensure styles are applied
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 300);
  }, [title, level]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
    >
      <IconDownload className="size-4 shrink-0" />
      Descargar PDF
    </button>
  );
}
