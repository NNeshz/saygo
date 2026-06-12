/** Normaliza una respuesta para comparar sin castigar mayúsculas, espacios o puntuación final. */
export function normalizeAnswer(value: string): string {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[.,!?;:]+$/g, "")
    .replace(/\s+/g, " ")
    .trim()
}
