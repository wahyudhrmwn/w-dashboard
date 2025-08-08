"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Mapping untuk menerjemahkan path ke nama yang lebih user-friendly
const pathNameMap: Record<string, string> = {
  "": "Dashboard",
  main: "Main",
  exchange: "Exchange",
  "my-wallet": "My Wallet",
  payment: "Payment",
  transaction: "Transaction",
  transfer: "Transfer",
  features: "Features",
  "ai-agent": "AI Agent",
  "ai-models": "AI Models",
  automation: "Automation",
  integrations: "Integrations",
  tools: "Tools",
  "help-center": "Help Center",
  settings: "Settings",
};

// Path yang tidak memiliki halaman sendiri (tidak bisa diklik)
const nonClickablePaths = ["main", "features", "tools"];

// Mapping untuk menentukan parent menu berdasarkan path
const getParentMenu = (pathSegments: string[]): string => {
  if (pathSegments.length === 0) return "Main";

  const firstSegment = pathSegments[0];

  // Jika path dimulai dengan main/, features/, tools/
  if (["main", "features", "tools"].includes(firstSegment)) {
    return (
      pathNameMap[firstSegment] ||
      firstSegment.charAt(0).toUpperCase() + firstSegment.slice(1)
    );
  }

  // Jika path level pertama (seperti /my-wallet, /transfer), anggap sebagai Main
  return "Main";
};

export function DynamicBreadcrumb() {
  const pathname = usePathname();

  // Split path dan filter empty strings
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  // Tentukan parent menu
  const parentMenu = getParentMenu(pathSegments);

  // Untuk halaman root, tampilkan Main > Dashboard
  if (pathSegments.length === 0) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-muted-foreground">
              {parentMenu}
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  // Untuk halaman level pertama (seperti /my-wallet, /transfer, dll)
  if (pathSegments.length === 1) {
    const segment = pathSegments[0];
    const displayName =
      pathNameMap[segment] ||
      segment.charAt(0).toUpperCase() + segment.slice(1);

    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-muted-foreground">
              {parentMenu}
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{displayName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  // Untuk halaman dengan nested path (seperti /main/my-wallet, /features/ai-agent, dll)
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Parent menu (non-clickable) */}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-muted-foreground">
            {parentMenu}
          </BreadcrumbPage>
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const displayName =
            pathNameMap[segment] ||
            segment.charAt(0).toUpperCase() + segment.slice(1);
          const isNonClickable = nonClickablePaths.includes(segment);

          // Skip segment parent menu karena sudah ditampilkan di awal
          if (["main", "features", "tools"].includes(segment)) return null;

          return (
            <div key={segment} className="flex items-center gap-3">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast || isNonClickable ? (
                  <BreadcrumbPage
                    className={isNonClickable ? "text-muted-foreground" : ""}
                  >
                    {displayName}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{displayName}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
