import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { slugifyMarkdownFilename } from "./slug";

const MODULE_DIR = path.dirname(fileURLToPath(import.meta.url));
const MD_ROOT = path.join(MODULE_DIR, "..", "md");

export type ClassLessonMeta = {
  level: string;
  title: string;
};

export type ClassLesson = {
  content: string;
  meta: ClassLessonMeta;
};

function listMarkdownFiles(level: string): string[] {
  const dir = path.join(MD_ROOT, level);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"));
}

function fileSlug(filename: string): string {
  return slugifyMarkdownFilename(filename);
}

export function getAllClassLessonParams(): { level: string; slug: string }[] {
  if (!fs.existsSync(MD_ROOT)) return [];
  const levels = fs
    .readdirSync(MD_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const params: { level: string; slug: string }[] = [];
  for (const level of levels) {
    for (const file of listMarkdownFiles(level)) {
      params.push({ level, slug: fileSlug(file) });
    }
  }
  return params;
}

export function getClassLesson(
  level: string,
  slug: string,
): ClassLesson | null {
  const files = listMarkdownFiles(level);
  const file = files.find((f) => fileSlug(f) === slug);
  if (!file) return null;

  const filePath = path.join(MD_ROOT, level, file);
  const content = fs.readFileSync(filePath, "utf8");
  const title = file.replace(/\.md$/i, "");

  return {
    content,
    meta: { level, title },
  };
}

export function inferLessonHeading(
  content: string,
  fallbackTitle?: string,
): string {
  const trimmed = content.trimStart();
  const h1 = trimmed.match(/^#\s+([^#\n]+)/m);
  const h1Text = h1?.[1];
  if (h1Text) return h1Text.trim().replace(/\*\*/g, "");
  if (fallbackTitle) return fallbackTitle;
  const h2 = trimmed.match(/^##\s+(.+)$/m);
  const h2Text = h2?.[1];
  if (h2Text) return h2Text.replace(/\*\*/g, "").trim();
  return "Clase";
}
