'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { AppWindow, Blocks, Bot, Layers, Play } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function AppSidebar() {

    const path=usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row gap-2.5 items-center px-4 py-4">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <h2 className="font-semibold text-lg text-slate-900">Soul AI</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarMenuButton className={`h-12 gap-3 hover:bg-slate-100 ${path.includes('/dashboard')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-blue-100 items-center justify-center rounded-lg">
                    <AppWindow className="h-[18px] w-[18px] text-blue-900"/>
                </div>
                <span>Dashboard</span>
            </SidebarMenuButton>

            <SidebarMenuButton className={`h-12 gap-3 hover:bg-slate-100 ${path.includes('/dashboard/agents')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-blue-100 items-center justify-center rounded-lg">
                    <Bot className="h-[18px] w-[18px] text-blue-900"/>
                </div>
                <span>Agents</span>
            </SidebarMenuButton>

            <SidebarMenuButton className={`h-12 gap-3 hover:bg-slate-100 ${path.includes('/dashboard')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-blue-100 items-center justify-center rounded-lg">
                    <Play className="h-[18px] w-[18px] text-blue-900"/>
                </div>
                <span>Runs</span>
            </SidebarMenuButton>

            <SidebarMenuButton className={`h-12 gap-3 hover:bg-slate-100 ${path.includes('/dashboard')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-blue-100 items-center justify-center rounded-lg">
                    <Blocks className="h-[18px] w-[18px] text-blue-900"/>
                </div>
                <span>Integrations</span>
            </SidebarMenuButton>

            <SidebarMenuButton className={`h-12 gap-3 hover:bg-slate-100 ${path.includes('/dashboard')?'bg-slate-100':null}`}>
                <div className="flex h-9 w-8 shrink-0 bg-blue-100 items-center justify-center rounded-lg">
                    <Layers className="h-[18px] w-[18px] text-blue-900"/>
                </div>
                <span>Templates</span>
            </SidebarMenuButton>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}