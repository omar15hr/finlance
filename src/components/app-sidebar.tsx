"use client";

import {
  Calendar,
  Home,
  Inbox,
  Settings,
  Wallet,
  LucideIcon,
  Scale,
} from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type MenuItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

const items: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Transactions",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Budgets",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Accounts",
    url: "#",
    icon: Wallet,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="bg-[#1E1E2D] border-r border-gray-800">
      <SidebarContent className="p-4">
        <div className="flex items-center justify-center mb-10 p-4">
          <div className="p-2 rounded-lg">
            <Scale className="w-6 h-6" />
          </div>
          <span className="ml-3 text-2xl font-bold">Finlance</span>
        </div>

        {/* Menu Items */}
        <SidebarMenu className="space-y-2">
          {items.map((item) => {
            const isActive = pathname === item.url;
            return (
              <SidebarMenuItem key={item.title} className="group">
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className={`relative rounded-lg transition-colors duration-200 ${
                    isActive ? "bg-blue-600/20" : "hover:bg-gray-700/50"
                  }`}
                >
                  <a
                    href={item.url}
                    className={`flex items-center gap-3 px-4 py-6 ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-md ${
                        isActive ? "bg-blue-600" : "bg-gray-700"
                      }`}
                    >
                      <item.icon
                        className={`w-4 h-4 ${
                          isActive ? "text-white" : "text-gray-400"
                        }`}
                      />
                    </div>
                    <span className="font-medium">{item.title}</span>
                    {isActive && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-l-lg" />
                    )}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>

        {/* User Profile */}
        <div className="mt-auto pt-4 border-t border-gray-800">
          <div className="flex items-center p-3 rounded-lg cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-medium">
              OM
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Omar H.</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
