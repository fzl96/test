import { DashboardHeader } from "@/components/dashboard-header";
import { Suspense } from "react";
import Pagination from "@/components/pagination";
import { fetchJamaahPages } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { TableSkeleton } from "@/components/table-skeleton";
import Search from "@/components/search";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { JamaahTable } from "@/components/jamaah/jamaah-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jamaah",
  description: "Data jamaah Masjid Zaid bin Tsabit",
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
  const totalPages = await fetchJamaahPages(query);

  return (
    <div className="md:px-5">
      <DashboardHeader
        title="Jamaah"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Jamaah", href: "/dashboard/jamaah" },
        ]}
      >
        <Link href="/dashboard/jamaah/tambah" className={cn(buttonVariants())}>
          Tambah
        </Link>
      </DashboardHeader>
      <div>
        <div className="px-5 py-3">
          <Search placeholder="Cari jamaah..." />
        </div>
        <Suspense key={currentPage} fallback={<TableSkeleton />}>
          <JamaahTable currentPage={currentPage} query={query} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
