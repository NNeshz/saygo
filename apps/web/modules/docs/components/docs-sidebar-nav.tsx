"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { IconChevronRight } from "@tabler/icons-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@saygo/ui/components/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@saygo/ui/components/sidebar"
import type { DocSection } from "@/modules/docs/types/docs.types"

type Props = {
  sections: DocSection[]
}

export function DocsSidebarNav({ sections }: Props) {
  const pathname = usePathname()

  return (
    <>
      {sections.map((section) => {
        const isSectionActive = pathname.startsWith(section.href)
        return (
          <SidebarGroup key={section.key}>
            <Collapsible defaultOpen={isSectionActive}>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip={section.label}>
                    <Link href={section.href}>
                      <span className="font-medium">{section.label}</span>
                    </Link>
                  </SidebarMenuButton>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90 transition-transform">
                      <IconChevronRight size={14} />
                      <span className="sr-only">Toggle {section.label}</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {section.items.map((item) => {
                        const isActive = pathname === item.href
                        return (
                          <SidebarMenuSubItem key={item.href}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={isActive}
                            >
                              <Link href={item.href}>
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </SidebarMenu>
            </Collapsible>
          </SidebarGroup>
        )
      })}
    </>
  )
}
