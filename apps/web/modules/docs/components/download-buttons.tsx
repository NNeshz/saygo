"use client"

import { useState, useRef, useEffect } from "react"
import { IconDownload, IconChevronDown } from "@tabler/icons-react"

interface Props {
  title: string
  slug: string[]
}

const PRINT_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap');
  @page { size: A4; margin: 1.1cm 1.3cm; }
  * { box-sizing: border-box; }
  body {
    font-family: "Geist", ui-sans-serif, system-ui, -apple-system, Helvetica, Arial, sans-serif;
    font-size: 9.5pt;
    line-height: 1.42;
    color: #111;
    max-width: 100%;
  }
  h1 { font-size: 16pt; font-weight: 700; margin: 0 0 0.35em; }
  h2 { font-size: 12pt; font-weight: 600; margin: 0.9em 0 0.25em; border-bottom: 1px solid #ccc; padding-bottom: 0.12em; }
  h3 { font-size: 10.5pt; font-weight: 600; margin: 0.7em 0 0.18em; }
  h4 { font-size: 9.5pt; font-weight: 600; margin: 0.5em 0 0.12em; }
  p  { margin: 0.28em 0; }
  ul, ol { margin: 0.25em 0 0.25em 1.3em; }
  li { margin: 0.08em 0; }
  table { border-collapse: collapse; width: 100%; margin: 0.45em 0; font-size: 8.5pt; }
  th, td { border: 1px solid #ccc; padding: 2px 5px; text-align: left; vertical-align: top; }
  th { background: #f4f4f4; font-weight: 600; }
  blockquote {
    border-left: 2px solid #aaa;
    margin: 0.45em 0;
    padding: 0.25em 0.7em;
    color: #555;
    font-style: italic;
  }
  strong { font-weight: 600; }
  em { font-style: italic; }
  a { color: inherit; text-decoration: none; }
  hr { border: none; border-top: 1px solid #ddd; margin: 0.55em 0; }
  code { font-family: ui-monospace, "Courier New", monospace; font-size: 8pt; background: #f4f4f4; padding: 1px 3px; border-radius: 2px; }
  pre { background: #f4f4f4; padding: 5px 8px; border-radius: 3px; font-size: 7.5pt; white-space: pre-wrap; margin: 0.35em 0; }
  @media print { body { print-color-adjust: exact; -webkit-print-color-adjust: exact; } }
`


export function DownloadDropdown({ title, slug }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  function downloadPdf() {
    setOpen(false)
    const article = document.querySelector("article")
    if (!article) return
    const win = window.open("", "_blank")
    if (!win) return

    const clone = article.cloneNode(true) as HTMLElement

    // Remove UI elements that don't belong in print
    clone.querySelectorAll("[data-pdf-exclude]").forEach(el => el.remove())

    // Remove the horario line: first <p> whose only child is <em>
    clone.querySelector("p > em:only-child")?.closest("p")?.remove()

    // Remove the scope/summary block: from first <hr> through second <hr>
    const [firstHr, secondHr] = clone.querySelectorAll("hr")
    if (firstHr && secondHr) {
      const toRemove: ChildNode[] = []
      let node: ChildNode | null = firstHr
      while (node && node !== secondHr) {
        toRemove.push(node)
        node = node.nextSibling
      }
      toRemove.push(secondHr)
      toRemove.forEach(n => n.parentNode?.removeChild(n))
    }

    const safeTitle = title.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    win.document.write(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet">
  <title>${safeTitle}</title>
  <style>${PRINT_CSS}</style>
</head>
<body>${clone.innerHTML}</body>
</html>`)
    win.document.close()
    win.focus()
    win.document.fonts.ready.then(() => {
      win.print()
      win.close()
    }).catch(() => {
      setTimeout(() => { win.print(); win.close() }, 600)
    })
  }

  return (
    <div className="relative inline-block mb-8" ref={ref} data-pdf-exclude>
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground border border-border hover:bg-muted transition-colors px-3 py-1.5 rounded-md"
      >
        <IconDownload size={15} />
        Descargar
        <IconChevronDown
          size={13}
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1.5 z-50 min-w-[200px] rounded-md border border-border bg-background shadow-md py-1">
          <a
            href={`/api/docs/${slug.join("/")}`}
            download
            onClick={() => setOpen(false)}
            className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
          >
            Descargar Markdown
          </a>
          <button
            onClick={downloadPdf}
            className="flex w-full items-center px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
          >
            Descargar PDF
          </button>
        </div>
      )}
    </div>
  )
}
