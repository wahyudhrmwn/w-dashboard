"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  ChevronDown,
  Play,
  History,
  Star,
  Settings,
  BookOpen,
  Database,
  MoreHorizontal,
  Wallet,
  CreditCard,
  Home,
  DollarSign,
  User,
  HelpCircle,
  LayoutDashboard,
  ArrowRightLeft,
  Receipt,
  ArrowUpDown,
  Sparkles,
  Plug,
  Workflow,
  Bot,
  Brain,
  Wrench,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

// Menu items berdasarkan gambar
const platformItems = [
  {
    title: "Main",
    icon: LayoutDashboard,
    isActive: true,
    subItems: [
      { title: "Dashboard", icon: Home, href: "/" },
      { title: "My Wallet", icon: Wallet, href: "/main/my-wallet" },
      { title: "Transfer", icon: ArrowRightLeft, href: "/main/transfer" },
      { title: "Transaction", icon: Receipt, href: "/main/transaction" },
      { title: "Payment", icon: CreditCard, href: "/main/payment" },
      { title: "Exchange", icon: ArrowUpDown, href: "/main/exchange" },
    ],
  },
  {
    title: "Features",
    icon: Sparkles,
    href: "/features",
    subItems: [
      { title: "Integrations", icon: Plug, href: "/features/integrations" },
      { title: "Automation", icon: Workflow, href: "/features/automation" },
      { title: "AI Agents", icon: Bot, href: "/features/ai-agent" },
      { title: "AI Models", icon: Brain, href: "/features/ai-models" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    href: "/tools",
    subItems: [
      { title: "Settings", icon: Settings, href: "/tools/settings" },
      { title: "Help Center", icon: HelpCircle, href: "/tools/help-center" },
    ],
  },
];

export function AppSidebar() {
  // const { state } = useSidebar();
  const pathname = usePathname();

  // Daftar semua route yang valid (termasuk yang akan dibuat)
  const validRoutes = React.useMemo(() => {
    const routes = new Set<string>();

    // Tambahkan semua route yang ada di menu
    routes.add("/"); // Dashboard/home page
    routes.add("/main/my-wallet"); // My Wallet page
    routes.add("/main/transfer");
    routes.add("/main/transaction");
    routes.add("/main/payment");
    routes.add("/main/exchange");
    routes.add("/tools/settings");
    routes.add("/tools/help-center");
    routes.add("/tools");
    routes.add("/features");
    routes.add("/features/integrations");
    routes.add("/features/automation");
    routes.add("/features/ai-agent");
    routes.add("/features/ai-models");

    return routes;
  }, []);

  // State untuk menyimpan menu yang terbuka
  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    // Jika berada di halaman Dashboard ('/'), buka menu Main secara default
    // Atau jika berada di halaman yang ada dalam submenu Main
    const mainRoutes = [
      "/",
      "/main/my-wallet",
      "/main/transfer",
      "/main/transaction",
      "/main/payment",
      "/main/exchange",
    ];
    if (mainRoutes.includes(pathname)) {
      return ["Main"];
    }
    return [];
  });

  // Update openItems ketika pathname berubah (reload/navigasi)
  React.useEffect(() => {
    const mainRoutes = [
      "/",
      "/main/my-wallet",
      "/main/transfer",
      "/main/transaction",
      "/main/payment",
      "/main/exchange",
    ];
    const featuresRoutes = [
      "/features",
      "/features/integrations",
      "/features/automation",
      "/features/ai-agent",
      "/features/ai-models",
    ];
    const toolsRoutes = ["/tools", "/tools/settings", "/tools/help-center"];

    setOpenItems((prev) => {
      const newOpenItems = [...prev];

      // Buka menu Main jika berada di route Main
      if (mainRoutes.includes(pathname) && !newOpenItems.includes("Main")) {
        newOpenItems.push("Main");
      }

      // Buka menu Features jika berada di route Features
      if (
        featuresRoutes.includes(pathname) &&
        !newOpenItems.includes("Features")
      ) {
        newOpenItems.push("Features");
      }

      // Buka menu Tools jika berada di route Tools
      if (toolsRoutes.includes(pathname) && !newOpenItems.includes("Tools")) {
        newOpenItems.push("Tools");
      }

      return newOpenItems;
    });
  }, [pathname]);

  const toggleItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isActiveRoute = (href: string) => {
    // Hanya return true jika path sama DAN path tersebut ada dalam daftar valid routes
    return pathname === href && validRoutes.has(href);
  };

  return (
    <Sidebar className="border-r bg-gradient-sidebar">
      <SidebarHeader className="border-b px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-elegant shadow-lg">
            <div className="text-primary-foreground text-sm font-medium">S</div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm">Snyzze Inc</span>
            <span className="text-xs text-muted-foreground">Enterprise</span>
          </div>
          <MoreHorizontal className="ml-auto size-4 text-muted-foreground" />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2 text-xs font-medium text-muted-foreground">
            Platform
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {platformItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems.length > 0 ? (
                    <Collapsible
                      open={openItems.includes(item.title)}
                      onOpenChange={() => toggleItem(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={cn(
                            "w-full justify-between hover-lift mb-3",
                            item.subItems.some((subItem) =>
                              isActiveRoute(subItem.href || "")
                            ) && "sidebar-menu-active font-medium"
                          )}
                          isActive={item.subItems.some((subItem) =>
                            isActiveRoute(subItem.href || "")
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="size-4" />
                            <span>{item.title}</span>
                          </div>
                          {openItems.includes(item.title) ? (
                            <ChevronDown className="size-4" />
                          ) : (
                            <ChevronRight className="size-4" />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={isActiveRoute(subItem.href || "")}
                                className={cn(
                                  "hover-lift",
                                  isActiveRoute(subItem.href || "") &&
                                    "sidebar-submenu-active font-medium shadow-sm"
                                )}
                              >
                                <Link
                                  href={
                                    subItem.href ||
                                    `/${subItem.title.toLowerCase()}`
                                  }
                                >
                                  <subItem.icon className="size-4" />
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      isActive={isActiveRoute(item.href || "")}
                      className={cn(
                        isActiveRoute(item.href || "") &&
                          "bg-primary/10 text-primary font-medium border-l-2 border-primary shadow-sm"
                      )}
                    >
                      <Link href={item.href || `/${item.title.toLowerCase()}`}>
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto size-4" />
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-gradient-elegant shadow-lg flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-medium">
              S
            </span>
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-sm font-medium">shadcn</span>
            <span className="text-xs text-muted-foreground">m@example.com</span>
          </div>
          <MoreHorizontal className="size-4 text-muted-foreground" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
