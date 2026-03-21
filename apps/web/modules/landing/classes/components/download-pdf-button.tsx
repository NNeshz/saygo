"use client";

import { Button } from "@saygo/ui/src/components/button";
import { IconDownload } from "@tabler/icons-react";
import { toast } from "sonner";

type DownloadPdfButtonProps = {
  title: string;
  description?: string;
};

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Página mínima en la ventana emergente si el PDF falla (evita pestaña en blanco). */
function writePdfErrorPage(
  printWindow: Window,
  opts: { title: string; heading: string; message: string; hint?: string },
) {
  const safeHeading = escapeHtml(opts.heading);
  const safeMessage = escapeHtml(opts.message);
  const safeHint = opts.hint ? escapeHtml(opts.hint) : "";
  const safeTitle = escapeHtml(opts.title);
  printWindow.document.open();
  printWindow.document.write(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${safeTitle} · Saygo</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      font-family: ui-sans-serif, system-ui, sans-serif;
      background: #fafafa;
      color: #171717;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    .box {
      max-width: 28rem;
      padding: 1.75rem;
      background: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    h1 {
      margin: 0 0 0.75rem;
      font-size: 1.125rem;
      font-weight: 700;
      color: #b91c1c;
    }
    p { margin: 0 0 0.65rem; font-size: 0.9375rem; line-height: 1.55; color: #404040; }
    p:last-child { margin-bottom: 0; }
    .hint { font-size: 0.8125rem; color: #737373; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #f0f0f0; }
    .brand { margin-top: 1.25rem; font-size: 0.75rem; color: #a3a3a3; }
  </style>
</head>
<body>
  <div class="box">
    <h1>${safeHeading}</h1>
    <p>${safeMessage}</p>
    ${safeHint ? `<p class="hint">${safeHint}</p>` : ""}
    <p class="brand">Saygo · Puedes cerrar esta pestaña.</p>
  </div>
</body>
</html>`);
  printWindow.document.close();
}

/** CSS para impresión: el clon no incluye Tailwind; todo va por selectores semánticos. */
function buildPrintStylesheet(): string {
  return `
    :root {
      --ink: #171717;
      --ink-muted: #525252;
      --border: #e5e5e5;
      --surface: #fafafa;
      --accent: #c2410c;
      --accent-soft: #fff7ed;
    }

    @page {
      size: A4;
      margin: 16mm 14mm 18mm 14mm;
    }

    * {
      box-sizing: border-box;
    }

    html {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 10.5pt;
      line-height: 1.55;
      color: var(--ink);
      hyphens: auto;
    }

    .doc-header {
      margin-bottom: 1.75rem;
      padding-bottom: 1.25rem;
      border-bottom: 2px solid var(--accent);
    }

    .doc-kicker {
      margin: 0 0 0.35rem;
      font-size: 8.5pt;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent);
    }

    .doc-title {
      margin: 0 0 0.5rem;
      font-size: 18pt;
      font-weight: 800;
      line-height: 1.25;
      letter-spacing: -0.02em;
      color: var(--ink);
    }

    .doc-desc {
      margin: 0;
      max-width: 52rem;
      font-size: 10pt;
      line-height: 1.5;
      color: var(--ink-muted);
    }

    .doc-brand {
      margin-top: 0.75rem;
      font-size: 8.5pt;
      color: var(--ink-muted);
    }

    .lesson-print-root {
      max-width: 100%;
    }

    .lesson-print-root h2 {
      margin: 1.35rem 0 0.65rem;
      font-size: 13pt;
      font-weight: 700;
      line-height: 1.3;
      color: var(--accent);
      page-break-after: avoid;
    }

    .lesson-print-root h2:first-child {
      margin-top: 0;
    }

    .lesson-print-root h3 {
      margin: 1rem 0 0.45rem;
      font-size: 11pt;
      font-weight: 700;
      color: var(--accent);
      page-break-after: avoid;
    }

    .lesson-print-root h4 {
      margin: 0 0 0.65rem;
      padding-bottom: 0.35rem;
      font-size: 10.5pt;
      font-weight: 700;
      line-height: 1.35;
      color: var(--accent);
      border-bottom: 1px solid var(--border);
      page-break-after: avoid;
    }

    .lesson-print-root p {
      margin: 0 0 0.65rem;
    }

    .lesson-print-root p:last-child {
      margin-bottom: 0;
    }

    .lesson-print-root strong {
      font-weight: 600;
      color: var(--ink);
    }

    .lesson-print-root ul,
    .lesson-print-root ol {
      margin: 0 0 0.85rem;
      padding-left: 1.15rem;
    }

    .lesson-print-root li {
      margin-bottom: 0.25rem;
    }

    .lesson-print-root li:last-child {
      margin-bottom: 0;
    }

    .lesson-print-root figure {
      margin: 1rem 0;
      page-break-inside: avoid;
    }

    .lesson-print-root figure > div {
      overflow: visible !important;
    }

    /* Vocabulario y ejercicios comparten bloque con título h4 */
    .lesson-print-root section > div:has(h4) {
      margin: 0.85rem 0;
      padding: 0.65rem 0.85rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: var(--surface);
      page-break-inside: avoid;
    }

    .lesson-print-root table {
      width: 100%;
      border-collapse: collapse;
      font-size: 9.5pt;
      border: 1px solid var(--border);
      border-radius: 4px;
      overflow: hidden;
    }

    .lesson-print-root caption {
      caption-side: top;
      padding: 0.5rem 0.65rem;
      font-size: 10pt;
      font-weight: 700;
      text-align: left;
      color: var(--accent);
      background: var(--surface);
      border-bottom: 1px solid var(--border);
    }

    .lesson-print-root thead tr {
      background: #f4f4f5;
    }

    .lesson-print-root th {
      padding: 0.45rem 0.55rem;
      font-size: 8pt;
      font-weight: 700;
      text-align: left;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--ink-muted);
      border-bottom: 1px solid var(--border);
    }

    .lesson-print-root td {
      padding: 0.4rem 0.55rem;
      vertical-align: top;
      border-bottom: 1px solid var(--border);
    }

    .lesson-print-root tbody tr:nth-child(even) td {
      background: #fafafa;
    }

    .lesson-print-root tbody tr:last-child td {
      border-bottom: none;
    }

    .lesson-print-root dl {
      margin: 0.35rem 0 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 1.25rem;
      font-size: 9.5pt;
    }

    .lesson-print-root dl > div {
      display: contents;
    }

    .lesson-print-root dt {
      margin: 0;
      padding: 0.35rem 0;
      font-weight: 600;
      font-family: ui-monospace, "Cascadia Code", "Segoe UI Mono", monospace;
      font-size: 9.5pt;
      border-bottom: 1px solid #f0f0f0;
    }

    .lesson-print-root dd {
      margin: 0;
      padding: 0.35rem 0;
      color: var(--ink-muted);
      border-bottom: 1px solid #f0f0f0;
    }

    .lesson-print-root ol > li {
      margin-bottom: 0.65rem;
      padding-left: 0.15rem;
    }

    .lesson-print-root ol > li > p {
      margin-bottom: 0.25rem;
    }

    .lesson-print-root details {
      margin-top: 0.35rem;
    }

    .lesson-print-root summary {
      cursor: pointer;
      font-size: 8.5pt;
      font-weight: 600;
      color: var(--accent);
    }

    .lesson-print-root details > p {
      margin-top: 0.35rem;
      padding: 0.45rem 0.55rem;
      font-size: 9.5pt;
      background: var(--accent-soft);
      border: 1px solid #fed7aa;
      border-radius: 4px;
    }

    @media print {
      body {
        padding: 0;
      }
      .doc-header {
        border-bottom-color: var(--accent);
      }
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  `;
}

export function DownloadPdfButton({ title, description }: DownloadPdfButtonProps) {
  const handleDownload = () => {
    let printWindow: Window | null = null;

    try {
      printWindow = window.open("", "_blank");
      if (!printWindow) {
        toast.error("No se pudo preparar la impresión", {
          description:
            "El navegador bloqueó la ventana emergente. Permite ventanas emergentes para Saygo y vuelve a pulsar «Descargar PDF».",
        });
        return;
      }

      const content = document.querySelector(".lesson-print-root");
      if (!content) {
        writePdfErrorPage(printWindow, {
          title,
          heading: "No hay contenido para imprimir",
          message:
            "No encontramos el texto de la lección en esta página. Suele pasar si la página aún está cargando o hubo un error al mostrarla.",
          hint: "Recarga la página y prueba otra vez. Si sigue fallando, abre Saygo en otro navegador.",
        });
        toast.error("No se pudo generar el PDF", {
          description: "No está disponible el contenido de la lección. Recarga la página e inténtalo de nuevo.",
        });
        return;
      }

      const safeTitle = escapeHtml(title);
      const safeDesc = description ? escapeHtml(description) : "";

      printWindow.document.open();
      printWindow.document.write(`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeTitle} · Saygo</title>
    <style>${buildPrintStylesheet()}</style>
  </head>
  <body>
    <header class="doc-header">
      <p class="doc-kicker">Saygo · Nivel zero</p>
      <h1 class="doc-title">${safeTitle}</h1>
      ${safeDesc ? `<p class="doc-desc">${safeDesc}</p>` : ""}
      <p class="doc-brand">saygo.app · Material de clase</p>
    </header>
    <main class="lesson-print-root">
      ${content.innerHTML}
    </main>
  </body>
</html>`);
      printWindow.document.close();
      printWindow.focus();

      setTimeout(() => {
        printWindow?.print();
      }, 300);
    } catch {
      if (printWindow) {
        writePdfErrorPage(printWindow, {
          title,
          heading: "Error al generar el PDF",
          message:
            "Algo falló al montar el documento para imprimir. No se ha perdido tu lección en la web.",
          hint: "Cierra esta pestaña, recarga la página de la clase y vuelve a intentarlo. Si persiste, prueba con Chrome o Firefox actualizado.",
        });
      }
      toast.error("Error al generar el PDF", {
        description:
          "Ocurrió un fallo inesperado. Recarga la página; si continúa, prueba otro navegador.",
      });
    }
  };

  return (
    <Button variant="outline" size="sm" onClick={handleDownload} className="w-full sm:w-auto">
      <IconDownload className="size-4" />
      Descargar PDF
    </Button>
  );
}
