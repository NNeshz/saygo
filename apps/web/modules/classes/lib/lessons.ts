import fs from "node:fs";
import path from "node:path";
import { slugifyMarkdownFilename } from "./slug";

const MD_ROOT = path.join(process.cwd(), "modules/classes/md");

/** Carpetas bajo `md/` (slug de URL) y etiqueta visible en /classes */
export const CLASS_LEVEL_DEFINITIONS = [
  { folder: "zero", label: "Zero to A1" },
  { folder: "a1", label: "A1 to A2" },
  { folder: "a2", label: "A2 to B1" },
  { folder: "b1", label: "B1 to B2" },
] as const;

export type ClassLevelFolder = (typeof CLASS_LEVEL_DEFINITIONS)[number]["folder"];

export type ClassLessonMeta = {
  level: string;
  slug: string;
  filename: string;
  title: string;
};

function assertSafeSegment(segment: string): void {
  if (segment === "" || segment.includes(".") || segment.includes("/")) {
    throw new Error(`Invalid path segment: ${segment}`);
  }
}

export function getClassLevels(): string[] {
  if (!fs.existsSync(MD_ROOT)) return [];
  return fs
    .readdirSync(MD_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

export function getLessonsForLevel(level: string): ClassLessonMeta[] {
  assertSafeSegment(level);
  const dir = path.join(MD_ROOT, level);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.toLowerCase().endsWith(".md"))
    .map((d) => {
      const filename = d.name;
      const slug = slugifyMarkdownFilename(filename);
      const title = filename.replace(/\.md$/i, "");
      return { level, slug, filename, title };
    })
    .sort((a, b) => a.title.localeCompare(b.title, "es"));
}

export function getClassLesson(
  level: string,
  slug: string,
): { meta: ClassLessonMeta; content: string } | null {
  assertSafeSegment(level);
  const lessons = getLessonsForLevel(level);
  const meta = lessons.find((l) => l.slug === slug);
  if (!meta) return null;

  const filePath = path.join(MD_ROOT, level, meta.filename);
  const content = fs.readFileSync(filePath, "utf8");
  return { meta, content };
}

export function getAllClassLessonParams(): { level: string; slug: string }[] {
  return CLASS_LEVEL_DEFINITIONS.flatMap(({ folder }) =>
    getLessonsForLevel(folder).map((l) => ({ level: l.level, slug: l.slug })),
  );
}

/** Paneles en orden fijo para la página de índice (incluye niveles sin .md). */
export function getClassLevelPanels(): {
  folder: ClassLevelFolder;
  label: string;
  lessons: ClassLessonMeta[];
}[] {
  return CLASS_LEVEL_DEFINITIONS.map(({ folder, label }) => ({
    folder,
    label,
    lessons: getLessonsForLevel(folder),
  }));
}

/** Primera línea `# Título` del markdown, si existe; si no, el título derivado del archivo. */
export function inferLessonHeading(markdown: string, fallbackTitle: string): string {
  const line = markdown.split(/\r?\n/).find((l) => l.trim().startsWith("#"));
  if (!line) return fallbackTitle;
  const stripped = line.replace(/^#+\s*/, "").trim();
  return stripped || fallbackTitle;
}
