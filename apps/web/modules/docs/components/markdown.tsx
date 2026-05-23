import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Components } from "react-markdown"
import type { ReactNode } from "react"
import { slugifyHeading } from "@/modules/docs/lib/headings"

function getNodeText(node: ReactNode): string {
  if (typeof node === "string") return node
  if (typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(getNodeText).join("")
  if (node && typeof node === "object" && "props" in node) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return getNodeText((node as any).props?.children)
  }
  return ""
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold tracking-tight mb-4 mt-2">{children}</h1>
  ),
  h2: ({ children }) => {
    const id = slugifyHeading(getNodeText(children))
    return (
      <h2
        id={id}
        className="scroll-mt-20 text-xl font-semibold border-b pb-2 mb-4 mt-10"
      >
        {children}
      </h2>
    )
  },
  h3: ({ children }) => {
    const id = slugifyHeading(getNodeText(children))
    return (
      <h3 id={id} className="scroll-mt-20 text-base font-semibold mt-7 mb-3">
        {children}
      </h3>
    )
  },
  h4: ({ children }) => (
    <h4 className="text-sm font-semibold mt-5 mb-2">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="leading-7 mb-4 text-foreground/90">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-5 mb-4 space-y-1 text-foreground/90">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-5 mb-4 space-y-1 text-foreground/90">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-7 pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary/60 pl-4 py-0.5 my-4 bg-muted/30 rounded-r-sm text-muted-foreground italic">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.startsWith("language-")
    if (isBlock) {
      return (
        <code className="block bg-muted rounded-md px-4 py-3 text-sm font-mono overflow-x-auto whitespace-pre text-foreground">
          {children}
        </code>
      )
    }
    return (
      <code className="bg-muted rounded px-1.5 py-0.5 text-[0.8em] font-mono text-foreground">
        {children}
      </code>
    )
  },
  pre: ({ children }) => (
    <pre className="my-4 overflow-hidden rounded-lg border bg-muted">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="my-5 w-full overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-muted/60 text-muted-foreground">{children}</thead>
  ),
  tbody: ({ children }) => <tbody className="divide-y">{children}</tbody>,
  tr: ({ children }) => <tr className="divide-x">{children}</tr>,
  th: ({ children }) => (
    <th className="px-4 py-2.5 text-left font-semibold">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2.5 text-foreground/80">{children}</td>
  ),
  hr: () => <hr className="my-8 border-border" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
    >
      {children}
    </a>
  ),
}

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  )
}
