Eres un experto diseñador de material didáctico para la enseñanza del inglés a hispanohablantes mexicanos. 
Voy a pedirte que generes una clase completa en formato Markdown (.md) para uno de mis módulos.

El contexto es el siguiente:
- Nivel: [A1 / A2 / B1]
- Módulo número: [número]
- Tema: [nombre del módulo, ej: "Rutinas Diarias — Presente Simple Afirmativo"]
- Horas del módulo: [número de horas totales del módulo]
- Alumnos: mexicanos de secundaria/preparatoria, hispanohablantes nativos
- El documento es de consulta independiente: el alumno debe poder resolver cualquier duda sin necesidad del profesor

Genera el archivo con EXACTAMENTE esta estructura, en este orden, sin saltarte ninguna sección:

---

# [Título del tema]
> Subtítulo con los subtemas que cubre

---

## 1. ¿Para qué sirve esto?
Explicación en español de para qué se usa este tema en la vida real. 
Máximo 4 líneas. Sin tecnicismos. Que el alumno entienda la utilidad antes de aprender la regla.

---

## 2. Estructura y reglas
Explicación clara de la gramática con:
- Regla principal en texto
- Tabla de estructura (columnas: Sujeto / Forma del verbo / Ejemplo)
- Casos especiales o excepciones con su propia tabla si aplica
- Nota de error frecuente al pie de cada regla (señalado como ⚠️)

---

## 3. Vocabulario clave
Tabla con las palabras esenciales del tema organizada en:
- Columnas: Inglés / Español / Pronunciación aproximada / Ejemplo en oración
- Agrupado por categorías si aplica (ej: rutina matutina / nocturna, verbos regulares / irregulares)

---

## 4. Ejemplos en contexto
- Mínimo 8 oraciones de ejemplo completas
- Todas relacionadas con la vida cotidiana mexicana (escuela, transporte, familia, comida, trámites)
- Incluir afirmativo, negativo e interrogativo si el tema lo permite
- Cada ejemplo con su traducción al español entre paréntesis

---

## 5. Tabla de errores comunes
Tabla con columnas: Error frecuente / Corrección / Por qué es incorrecto
Mínimo 6 errores típicos de hispanohablantes para este tema específico.

---

## 6. Comparación o contraste (si aplica)
Si el tema involucra dos estructuras que se confunden (ej: for vs since, make vs do, 
say vs tell, going to vs will), incluir:
- Explicación de la diferencia en español
- Tabla comparativa: Estructura A / Cuándo se usa / Estructura B / Cuándo se usa
- 4 pares de oraciones que muestren el contraste en contexto

Si el tema no tiene contraste directo, omitir esta sección.

---

## 7. Diálogo modelo
Un diálogo natural de 8 a 12 líneas entre dos personas en un contexto mexicano cotidiano 
(escuela, mercado, transporte, familia, trámite).
El diálogo debe contener de forma natural el tema gramatical de la clase.
Debajo del diálogo, una versión en español.

---

## 8. Texto modelo
Un párrafo o texto corto (80–120 palabras) escrito en primera persona que use 
el tema de la clase de forma natural.
Contexto mexicano.
Debajo del texto, su traducción al español.

---

## 9. Ejercicios de práctica
Exactamente 3 tipos de ejercicio:

**Ejercicio 1 — Completa la oración**
5 oraciones con espacio en blanco para que el alumno llene la forma correcta.
Al final, sección de respuestas correctas en un bloque separado con la etiqueta: ### ✅ Respuestas

**Ejercicio 2 — Corrige el error**
5 oraciones incorrectas. El alumno debe identificar y corregir el error.
Al final, sección de respuestas correctas.

**Ejercicio 3 — Traduce al inglés**
5 oraciones en español relacionadas con el contexto mexicano.
Al final, sección de respuestas correctas.

---

## 10. Resumen visual
Una tabla de resumen con todo lo esencial del tema:
- Columnas: Concepto / Regla / Ejemplo
- Máximo 10 filas
- Debe funcionar como cheat sheet: si el alumno solo lee esta tabla, recuerda lo esencial

---

## 11. Checklist del alumno
Lista de verificación con 8 a 10 puntos en primera persona.
El alumno la usa para autoevaluar si dominó el tema.
Formato: - [ ] Puedo [hacer algo concreto]
Ejemplo: - [ ] Puedo conjugar verbos en tercera persona sin cometer errores de -s/-es/-ies

---

Instrucciones de formato:
- Todo en Markdown válido
- Títulos con # ## ###
- Tablas con | col | col | col |
- Bloques de código para estructuras gramaticales usando triple backtick
- Errores siempre marcados con ❌, correcciones con ✓
- Notas importantes con > blockquote
- Dame la respuesta aquí en el chat para copiar y pegar, sin crear archivos
---
---

# Plantilla de submódulo

Cada módulo se divide en **submódulos de ~90 min**. Los temas, el vocabulario del entorno y las palabras puente de cada submódulo están en `docs/zero/plan-de-contenido.md`.

**Dónde va cada archivo:** `apps/web/content/{nivel}/NN-slug/` con un `_meta.json` (`title`, `description`, `order`, `hours`) y, por submódulo, `0N-slug.md` + `0N-slug.exercises.json`.

**Frontmatter de cada submódulo:**

    title: "…"
    description: "…"
    order: N
    submodule: "15.N"
    duration: "90 min"
    objectives:
      - "Puedo … (concreto y medible)"

**Secciones, en este orden:**

0. **Objetivos y puente** — "Al terminar esta sesión puedo:" + tabla *Lo que ya sabes | Dónde lo viste | Cómo se conecta hoy* (citar módulos concretos).
1. ¿Para qué sirve esto? (máx. 4 líneas)
2. Estructura y reglas (⚠️ error frecuente al pie de cada regla)
3. Vocabulario clave — siempre con una tabla **"Vocabulario de mi entorno"** (Inglés / Español / Pronunciación / Ejemplo) del dominio asignado
4. Ejemplos en contexto (8–10, con traducción)
5. Tabla de errores comunes (≥6). Si algo es correcto pero menos natural, **no** se marca con ❌.
6. Comparación o contraste (si aplica)
7. Diálogo modelo (8–12 líneas + versión en español)
8. Texto modelo (80–120 palabras + traducción)
9. **¡A hablar!** — tarea comunicativa: pasos, tabla de frases para empezar, ejemplo modelo, reto extra
10. Ejercicios de práctica (completa / corrige el error — cada oración con **exactamente un error real** / traduce), con respuestas
11. Resumen visual (máx. 10 filas)
12. Checklist del alumno (8–10 líneas "[ ] Puedo …")

**Regla de oro:** en ejemplos, diálogos, textos y ejercicios solo se usa lo que el alumno ya aprendió (módulos y submódulos anteriores). Si una frase natural necesita algo no enseñado, cámbiala.

**Formato:** Markdown sin bloques de código (usa tablas, listas, **negritas**, > citas). Contextos mexicanos apropiados para adolescentes (nada de alcohol ni temas de adultos).

**Ejercicios (.exercises.json):** 3 niveles (`basico`, `medio`, `avanzado`) × 6 ejercicios; básico 4 choice + 2 fill, medio y avanzado 3 fill + 2 order + 1 choice. Validar con `bun apps/web/scripts/validate-exercises.ts`.
