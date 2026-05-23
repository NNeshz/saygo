import { SidebarInset, SidebarProvider, SidebarTrigger } from "@saygo/ui/components/sidebar"
import { DocsSidebar } from "@/modules/docs"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DocsSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <main className="flex-1 px-6 py-8 md:px-10 md:py-10">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
