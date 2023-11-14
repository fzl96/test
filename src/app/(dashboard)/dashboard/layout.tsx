import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Header } from "@/components/header";
import { HeaderMobile } from "@/components/header-mobile";
import { SideNav } from "@/components/side-nav";
import { PageWrapper } from "@/components/page-wrapper";
import { MarginWidthWrapper } from "@/components/margin-width-wrapper";
import { Metadata } from "next";

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

  return (
    <div className="flex">
      {/* @ts-ignore */}
      <SideNav role={session?.user.role} />
      <main className="flex-1">
        <MarginWidthWrapper>
          <Header />
          {/* @ts-ignore */}
          <HeaderMobile role={session?.user.role} />
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </div>
  );
}
