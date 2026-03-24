/**
 * Clases de utilidad alineadas con la guía de tipografía de shadcn/ui (Base),
 * para mapear Markdown → HTML con el mismo aspecto que los ejemplos oficiales.
 * @see https://ui.shadcn.com/docs/components/base/typography
 */
export const markdownTypography = {
  article: "text-foreground",

  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance text-foreground",

  h2: "mt-10 scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight text-foreground first:mt-0",

  h3: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-foreground",

  h4: "mt-6 scroll-m-20 text-xl font-semibold tracking-tight text-foreground",

  lead: "text-xl leading-7 text-muted-foreground [&:not(:first-child)]:mt-6",

  p: "leading-7 text-foreground [&:not(:first-child)]:mt-6",

  blockquote: "mt-6 border-l-2 border-border pl-6 italic text-muted-foreground",

  ul: "my-6 ml-6 list-disc text-foreground [&>li]:mt-2",

  ol: "my-6 ml-6 list-decimal text-foreground [&>li]:mt-2",

  li: "leading-7",

  a: "font-medium text-primary underline underline-offset-4 hover:text-primary/90",

  strong: "font-semibold text-foreground",

  hr: "my-8 border-border",

  tableWrap: "my-6 w-full overflow-x-auto overflow-y-visible rounded-md border border-border",

  table: "w-full border-collapse text-sm",

  thead: "",

  tbody: "",

  tr: "m-0 border-t border-border p-0 even:bg-muted/50",

  th: "border border-border px-4 py-2 text-left font-bold text-foreground [&[align=center]]:text-center [&[align=right]]:text-right",

  td: "border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",

  inlineCode:
    "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",

  pre: "my-6 overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 text-sm",

  codeBlock: "font-mono text-sm font-normal text-foreground",
} as const;
