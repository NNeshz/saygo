import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Components } from "react-markdown"

const components: Components = {
  h1: ({ children }) => (
    <h1 className="scroll-mt-20 text-3xl font-bold tracking-tight mb-4 mt-2">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="scroll-mt-20 text-2xl font-semibold tracking-tight border-b pb-2 mb-4 mt-10">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="scroll-mt-20 text-xl font-semibold mt-8 mb-3">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="scroll-mt-20 text-base font-semibold mt-6 mb-2">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="leading-7 mb-4 text-foreground/90">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-4 space-y-1.5 text-foreground/90">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1.5 text-foreground/90">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 py-1 my-4 bg-muted/40 rounded-r-md text-muted-foreground italic">
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
      <code className="bg-muted rounded px-1.5 py-0.5 text-sm font-mono text-foreground">
        {children}
      </code>
    )
  },
  pre: ({ children }) => (
    <pre className="my-4 overflow-hidden rounded-lg border bg-muted">{children}</pre>
  ),
  table: ({ children }) => (
    <div className="my-4 w-full overflow-x-auto rounded-lg border">
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
