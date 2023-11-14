import { DashboardHeader } from "@/components/dashboard-header";
import { PengurusTable } from "@/components/pengurus/pengurus-table";
import Search from "@/components/search";
import { TableSkeleton } from "@/components/table-skeleton";
import { buttonVariants } from "@/components/ui/button";
import { fetchUsersPages } from "@/lib/data";
import Link from "next/link";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pengurus",
  description: "Akun pengurus aplikasi web Masjid Zaid bin Tsabit",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    query?: string;
  };
}) {
  const currentPage = Number(searchParams?.page || 1);
  const query = searchParams?.query || "";
  const totalPages = await fetchUsersPages(query);

  return (
    <>
      <DashboardHeader
        title="Akun Pengurus"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Pengurus", href: "/dashboard/pengurus" },
        ]}
      >
        <Link href="/dashboard/pengurus/tambah" className={buttonVariants()}>
          Tambah
        </Link>
      </DashboardHeader>
      <div>
        <div className="px-5 py-3">
          <Search placeholder="Cari pengurus..." />
        </div>
        <Suspense key={currentPage} fallback={<TableSkeleton />}>
          <PengurusTable currentPage={currentPage} query={query} />
        </Suspense>
      </div>
    </>
  );
}
