import { DashboardHeader } from "@/components/dashboard-header";
import { Suspense } from "react";
import { AddButton } from "@/components/pengeluaran/add-pengeluaran";
import Pagination from "@/components/pagination";
import { fetchPengeluaranPages } from "@/lib/data";
import { TableSkeleton } from "@/components/table-skeleton";
import { PengeluaranTable } from "@/components/pengeluaran/pengeluaran-table";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page || 1);
  const totalPages = await fetchPengeluaranPages();

  return (
    <>
      <DashboardHeader
        title="Pengeluaran"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Keuangan", href: "", active: false },
          { label: "Pengeluaran", href: "/dashboard/keuangan/pengeluaran" },
        ]}
      >
        <AddButton />
      </DashboardHeader>
      <div>
        <Suspense key={currentPage} fallback={<TableSkeleton />}>
          <PengeluaranTable currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </>
  );
}
