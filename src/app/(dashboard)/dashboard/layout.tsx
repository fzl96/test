import { sidebarNavItems } from "@/config/dashboard";
import { SidebarNav } from "@/components/sidebar-nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
      <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r  pr-2 md:sticky md:block lg:py-10">
        <SidebarNav items={sidebarNavItems} />
      </aside>
      {children}
    </div>
  );
}
