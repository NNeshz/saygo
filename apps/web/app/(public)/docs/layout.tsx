import { getDocTree } from "@/modules/docs"
import { DocsSidebar } from "@/modules/docs/components/docs-sidebar"
import { DocsMobileBar } from "@/modules/docs/components/docs-mobile-bar"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const tree = getDocTree()

  return (
    <div className="flex w-full max-w-7xl mx-auto">
      {/* ── Left sidebar (desktop) ────────────────────────────────────────── */}
      <DocsSidebar sections={tree} />

      {/* ── Main area ────────────────────────────────────────────────────── */}
      <div className="flex-1 min-w-0">
        {/* Mobile top bar */}
        <DocsMobileBar sections={tree} />

        {/* Page content */}
        <div className="px-6 py-8 lg:px-10">
          {children}
        </div>
      </div>
    </div>
  )
}
