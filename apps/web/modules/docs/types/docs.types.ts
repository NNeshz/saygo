export type DocFrontmatter = {
  title: string
  description?: string
  order?: number
  /** Número visible del submódulo, ej. "15.1" */
  submodule?: string
  /** Duración estimada de la sesión, ej. "90 min" */
  duration?: string
  /** Objetivos medibles en primera persona ("Puedo…") */
  objectives?: string[]
}

export type DocItem = {
  title: string
  description?: string
  slug: string[]
  href: string
  order: number
  submodule?: string
  duration?: string
  objectives?: string[]
  /** Horas totales del módulo (solo módulos con submódulos) */
  hours?: string
  /** Submódulos: presente cuando la clase es una carpeta con _meta.json */
  children?: DocItem[]
}

export type DocSection = {
  label: string
  key: string
  href: string
  description?: string
  order: number
  items: DocItem[]
}

export type DocMeta = {
  title: string
  description?: string
  order?: number
  hours?: string
}
