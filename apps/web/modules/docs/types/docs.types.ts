export type DocFrontmatter = {
  title: string
  description?: string
  order?: number
}

export type DocItem = {
  title: string
  description?: string
  slug: string[]
  href: string
  order: number
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
}
