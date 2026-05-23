import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@saygo/ui/components/sidebar"
import { Separator } from "@saygo/ui/components/separator"
import { getDocTree } from "@/modules/docs/lib/content"
import { DocsSidebarNav } from "./docs-sidebar-nav"

export function DocsSidebar() {
  const tree = getDocTree()

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  S
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">SayGo</span>
                  <span className="truncate text-xs text-muted-foreground">
                    Clases de inglés
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <Separator />

      <SidebarContent>
        <DocsSidebarNav sections={tree} />
      </SidebarContent>

      <SidebarFooter>
        <div className="px-2 py-1">
          <Link
            href="/"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
