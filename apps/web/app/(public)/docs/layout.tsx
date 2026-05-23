import Link from "next/link"
import { getDocTree } from "@/modules/docs"
import { DocsNav } from "@/modules/docs/components/docs-nav"
import { DocsMobileNav } from "@/modules/docs/components/docs-mobile-nav"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const tree = getDocTree()

  return (
    <div className="flex w-full">
      {/* ── Left sidebar (desktop) ────────────────────────────────────────── */}
      <aside className="hidden lg:block shrink-0 w-56 xl:w-64 border-r">
        <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8 px-5">
          <DocsNav sections={tree} />
        </div>
      </aside>

      {/* ── Main area ────────────────────────────────────────────────────── */}
      <div className="flex-1 min-w-0">
        {/* Mobile top bar */}
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 border-b text-sm text-muted-foreground">
          <DocsMobileNav sections={tree} />
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Clases
          </Link>
        </div>

        {/* Page content — each page renders its own content + optional right TOC */}
        <div className="px-6 py-8 lg:px-10 xl:px-14">
          {children}
        </div>
      </div>
    </div>
  )
}
