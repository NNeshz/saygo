import { redirect } from "next/navigation"
import { getDocTree } from "@/modules/docs"

export default function DocsPage() {
  const tree = getDocTree()
  const first = tree[0]?.items[0]
  if (first) redirect(first.href)
  redirect("/")
}
