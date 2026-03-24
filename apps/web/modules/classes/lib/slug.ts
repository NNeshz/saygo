/** Slug URL estable a partir del nombre de archivo `.md` (sin extensión). */
export function slugifyMarkdownFilename(filename: string): string {
  const base = filename.replace(/\.md$/i, "");
  return base
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
