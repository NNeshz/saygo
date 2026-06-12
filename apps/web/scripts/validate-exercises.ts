/**
 * Valida los archivos content/{level}/{slug}.exercises.json:
 * estructura, tiers, tipos de ejercicio y coherencia de respuestas.
 * Uso: bun apps/web/scripts/validate-exercises.ts
 */
import fs from "node:fs"
import path from "node:path"

const CONTENT_DIR = path.join(import.meta.dir, "..", "content")
const TIER_IDS = ["basico", "medio", "avanzado"]
const EXERCISES_PER_TIER = 6

function normalize(value: string): string {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[.,!?;:]+$/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

const errors: string[] = []
const warnings: string[] = []
let fileCount = 0

function err(file: string, msg: string) {
  errors.push(`${file}: ${msg}`)
}

function checkExercise(file: string, tierId: string, idx: number, ex: any) {
  const where = `[${tierId} #${idx + 1}]`
  if (ex.type === "choice") {
    if (!Array.isArray(ex.options) || ex.options.length < 3)
      err(file, `${where} choice necesita ≥3 options`)
    if (
      typeof ex.answer !== "number" ||
      ex.answer < 0 ||
      ex.answer >= (ex.options?.length ?? 0)
    )
      err(file, `${where} choice answer fuera de rango`)
    if (typeof ex.prompt !== "string" || !ex.prompt.trim())
      err(file, `${where} choice sin prompt`)
  } else if (ex.type === "fill") {
    if (typeof ex.prompt !== "string" || !ex.prompt.includes("___"))
      err(file, `${where} fill: prompt debe incluir ___`)
    else if (ex.prompt.split("___").length !== 2)
      err(file, `${where} fill: prompt debe tener exactamente un ___`)
    if (!Array.isArray(ex.answers) || ex.answers.length === 0)
      err(file, `${where} fill: answers vacío`)
  } else if (ex.type === "order") {
    if (!Array.isArray(ex.words) || ex.words.length < 4)
      err(file, `${where} order: necesita ≥4 words`)
    if (typeof ex.answer !== "string" || !ex.answer.trim())
      err(file, `${where} order: sin answer`)
    if (Array.isArray(ex.words) && typeof ex.answer === "string") {
      const answerTokens = normalize(ex.answer).split(" ").sort()
      const wordTokens = ex.words.map((w: string) => normalize(w)).sort()
      if (JSON.stringify(answerTokens) !== JSON.stringify(wordTokens))
        err(file, `${where} order: words no coinciden con answer`)
      if (ex.words.join(" ") === ex.answer)
        warnings.push(`${file}: ${where} order: words no están desordenadas`)
      if (/[.?!,]$/.test(ex.answer) || ex.words.some((w: string) => /[.?!,]$/.test(w)))
        warnings.push(`${file}: ${where} order: evita puntuación final`)
    }
  } else {
    err(file, `${where} tipo desconocido: ${ex.type}`)
  }
}

for (const level of fs.readdirSync(CONTENT_DIR)) {
  const dir = path.join(CONTENT_DIR, level)
  if (!fs.statSync(dir).isDirectory()) continue
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith(".exercises.json")) continue
    fileCount++
    const file = `${level}/${f}`
    let data: any
    try {
      data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8"))
    } catch (e) {
      err(file, `JSON inválido: ${e}`)
      continue
    }
    if (!Array.isArray(data.tiers) || data.tiers.length !== 3) {
      err(file, "debe tener exactamente 3 tiers")
      continue
    }
    data.tiers.forEach((tier: any, i: number) => {
      if (tier.id !== TIER_IDS[i])
        err(file, `tier ${i} debe tener id "${TIER_IDS[i]}", tiene "${tier.id}"`)
      if (typeof tier.title !== "string" || !tier.title.trim())
        err(file, `tier ${tier.id}: sin title`)
      if (typeof tier.description !== "string" || !tier.description.trim())
        err(file, `tier ${tier.id}: sin description`)
      if (
        !Array.isArray(tier.exercises) ||
        tier.exercises.length !== EXERCISES_PER_TIER
      ) {
        err(
          file,
          `tier ${tier.id}: debe tener ${EXERCISES_PER_TIER} ejercicios, tiene ${tier.exercises?.length ?? 0}`
        )
      }
      ;(tier.exercises ?? []).forEach((ex: any, j: number) =>
        checkExercise(file, tier.id, j, ex)
      )
    })
  }
}

console.log(`Archivos validados: ${fileCount}`)
if (warnings.length) {
  console.log(`\nAdvertencias (${warnings.length}):`)
  warnings.forEach((w) => console.log(`  ⚠ ${w}`))
}
if (errors.length) {
  console.log(`\nErrores (${errors.length}):`)
  errors.forEach((e) => console.log(`  ✗ ${e}`))
  process.exit(1)
}
console.log("✓ Todos los archivos de ejercicios son válidos")
