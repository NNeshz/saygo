import type { LessonContent } from "../../content-types";
import { fundamentos } from "./fundamentos";
import { informacionPersonal } from "./informacion-personal";
import { mundoAlrededor } from "./mundo-alrededor";
import { primerContacto } from "./primer-contacto";
import { rutinaDiaria } from "./rutina-diaria";
import { habilidadesGustos } from "./habilidades-gustos";
import { descripcionFisica } from "./descripcion-fisica";
import { elEntornoInmediato } from "./el-entorno-inmediato";

const lessons: Record<string, LessonContent> = {
  fundamentos,
  "primer-contacto": primerContacto,
  "informacion-personal": informacionPersonal,
  "mundo-alrededor": mundoAlrededor,
  "rutina-diaria": rutinaDiaria,
  "habilidades-gustos": habilidadesGustos,
  "descripcion-fisica": descripcionFisica,
  "el-entorno-inmediato": elEntornoInmediato,
};

export const zeroLessonSlugs = Object.keys(lessons) as string[];

export function getZeroLesson(slug: string): LessonContent | null {
  return lessons[slug] ?? null;
}

export function getZeroLessonSlugs(): string[] {
  return zeroLessonSlugs;
}
