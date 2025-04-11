import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DBBootloader from "@/components/ui/sub-ui/db-bootloader";
import { BellIcon } from "lucide-react";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 !px-4">
            <SidebarTrigger className="!-ml-1" />
            <Separator
              orientation="vertical"
              className="!mr-2 data-[orientation=vertical]:h-4"
            />
            <DBBootloader />
          </div>
          <div className="!px-4">
            <Button className="size-7 !-mr-1" variant="ghost" size="icon">
              <Link href="/admin/notification">
                <BellIcon className="" />
              </Link>
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 !p-4 !pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
