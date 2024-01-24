import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { SiteFooter } from "@/components/footer";
import { siteConfig } from "@/config/site";
import { sidebarNavItems, mainNavItems } from "@/config/dashboard";
import { MainNav } from "@/components/main-nav";
import { SidebarNav } from "@/components/sidebar-nav";
import Link from "next/link";
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard Masjid Zaid bin Tsabit",
    default: "Dashboard | Masjid Zaid bin Tsabit",
  },
  description: "Dashboard Masjid Zaid bin Tsabit",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) redirect("/login");
  console.log(session.user);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={mainNavItems} user={session.user}>
            <SidebarNav items={sidebarNavItems} user={session.user} />
          </MainNav>
        </div>
      </header>
      <div className="md:container flex-1">{children}</div>
      <SiteFooter className="border-t mt-5 md:mt-0" />
    </div>
  );
}
