import { notFound } from "next/navigation";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "~/components/site-footer";
import { MenuDropdown } from "~/components/menu-dropdown";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40">
        <div className="header-bg container flex h-16 items-center justify-between py-4">
          <MenuDropdown />
          <MainNav />
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
