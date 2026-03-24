import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdownTypography as T } from "@saygo/ui/src/lib/typography-markdown";
import { cn } from "@saygo/ui/src/lib/utils";

function markdownComponents(): Components {
  return {
    h1: ({ className, ...props }) => (
      <h1 className={cn(T.h1, className)} {...props} />
    ),
    h2: ({ className, ...props }) => (
      <h2 className={cn(T.h2, className)} {...props} />
    ),
    h3: ({ className, ...props }) => (
      <h3 className={cn(T.h3, className)} {...props} />
    ),
    h4: ({ className, ...props }) => (
      <h4 className={cn(T.h4, className)} {...props} />
    ),
    h5: ({ className, ...props }) => (
      <h5 className={cn(T.h4, "text-lg", className)} {...props} />
    ),
    h6: ({ className, ...props }) => (
      <h6 className={cn(T.h4, "text-base", className)} {...props} />
    ),
    p: ({ className, ...props }) => (
      <p className={cn(T.p, className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote className={cn(T.blockquote, className)} {...props} />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn(T.ul, className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn(T.ol, className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn(T.li, className)} {...props} />
    ),
    a: ({ className, href, children, ...props }) => (
      <a
        className={cn(T.a, className)}
        href={href}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        target={href?.startsWith("http") ? "_blank" : undefined}
        {...props}
      >
        {children}
      </a>
    ),
    strong: ({ className, ...props }) => (
      <strong className={cn(T.strong, className)} {...props} />
    ),
    hr: ({ className, ...props }) => (
      <hr className={cn(T.hr, className)} {...props} />
    ),
    table: ({ className, children, ...props }) => (
      <div className={T.tableWrap}>
        <table className={cn(T.table, className)} {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead className={cn(T.thead, className)} {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <tbody className={cn(T.tbody, className)} {...props} />
    ),
    tr: ({ className, ...props }) => (
      <tr className={cn(T.tr, className)} {...props} />
    ),
    th: ({ className, ...props }) => (
      <th className={cn(T.th, className)} {...props} />
    ),
    td: ({ className, ...props }) => (
      <td className={cn(T.td, className)} {...props} />
    ),
    code: ({ className, children, ...props }) => {
      const block = Boolean(
        className && String(className).includes("language-"),
      );
      return (
        <code
          className={cn(block ? T.codeBlock : T.inlineCode, className)}
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ className, children, ...props }) => (
      <pre className={cn(T.pre, className)} {...props}>
        {children}
      </pre>
    ),
    input: ({ type, className, ...props }) =>
      type === "checkbox" ? (
        <input
          type="checkbox"
          className={cn("mr-2 size-4 align-middle accent-primary", className)}
          disabled
          {...props}
        />
      ) : (
        <input type={type} className={className} {...props} />
      ),
    img: ({ className, alt, ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element -- URLs arbitrarias desde Markdown
      <img
        className={cn(
          "my-6 max-h-[min(70vh,32rem)] w-full max-w-full rounded-lg border border-border object-contain",
          className,
        )}
        alt={alt ?? ""}
        {...props}
      />
    ),
    del: ({ className, ...props }) => (
      <del className={cn("text-muted-foreground", className)} {...props} />
    ),
  };
}

type MarkdownBodyProps = {
  content: string;
  className?: string;
};

/** Renderiza Markdown (GFM: tablas, tachado, listas de tareas, etc.) con tipografía tipo shadcn. */
export function MarkdownBody({ content, className }: MarkdownBodyProps) {
  return (
    <article className={cn(T.article, "max-w-none", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents()}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
