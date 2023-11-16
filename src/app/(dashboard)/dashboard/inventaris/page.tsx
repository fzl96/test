import { DashboardHeader } from "@/components/dashboard-header";
import { Suspense } from "react";
import { AddButton } from "@/components/inventaris/add-inventaris";
import Pagination from "@/components/pagination";
import { fetchInventarisPages } from "@/lib/data";
import { TableSkeleton } from "@/components/table-skeleton";
import { InventarisTable } from "@/components/inventaris/inventaris-table";
import Search from "@/components/search";
import { Metadata } from "next";
import { ExportInventaris } from "@/components/inventaris/export";

export const metadata: Metadata = {
  title: "Inventaris",
  description: "Data inventaris dari Masjid Zaid bin Tsabit",
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
  const totalPages = await fetchInventarisPages(query);

  return (
    <div className="md:px-5">
      <DashboardHeader
        title="Inventaris"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Inventaris", href: "/dashboard/inventaris" },
        ]}
      >
        <div className="space-x-2">
          <ExportInventaris />
          <AddButton />
        </div>
      </DashboardHeader>
      <div>
        <div className="px-5 py-3">
          <Search placeholder="Cari inventaris..." />
        </div>
        <Suspense key={currentPage} fallback={<TableSkeleton />}>
          <InventarisTable currentPage={currentPage} query={query} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
