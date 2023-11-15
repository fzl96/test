import { DashboardHeader } from "@/components/dashboard-header";
import { PengurusTable } from "@/components/pengurus/pengurus-table";
import Search from "@/components/search";
import { TableSkeleton } from "@/components/table-skeleton";
import { buttonVariants } from "@/components/ui/button";
import { fetchUsersPages } from "@/lib/data";
import Link from "next/link";
import { Suspense } from "react";
import { Metadata } from "next";
import Pagination from "@/components/pagination";

export const metadata: Metadata = {
  title: "Pengurus",
  description: "Pengurus Masjid Zaid bin Tsabit",
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
    <div className="md:px-5">
      <DashboardHeader
        title="Pengurus"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Pengurus", href: "/dashboard/pengurus" },
        ]}
      >
        <Link href="/dashboard/pengurus/tambah" className={buttonVariants()}>
          Tambah
        </Link>
      </DashboardHeader>
      <div className="px-5 py-3">
        <Search placeholder="Cari pengurus..." />
      </div>
      <Suspense key={currentPage} fallback={<TableSkeleton />}>
        <PengurusTable currentPage={currentPage} query={query} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
