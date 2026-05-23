export type Heading = {
  level: 2 | 3
  text: string
  id: string
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export function extractHeadings(markdown: string): Heading[] {
  const regex = /^(#{2,3})\s+(.+)$/gm
  const headings: Heading[] = []
  let match
  while ((match = regex.exec(markdown)) !== null) {
    const level = match[1].length as 2 | 3
    // strip inline markdown from the text
    const text = match[2]
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/\*(.+?)\*/g, "$1")
      .replace(/`(.+?)`/g, "$1")
      .trim()
    headings.push({ level, text, id: slugifyHeading(text) })
  }
  return headings
}
