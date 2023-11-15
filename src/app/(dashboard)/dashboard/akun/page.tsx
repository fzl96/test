import { DashboardHeader } from "@/components/dashboard-header";
import { AkunTable } from "@/components/akun/table";
import Search from "@/components/search";
import { TableSkeleton } from "@/components/table-skeleton";
import { buttonVariants } from "@/components/ui/button";
import { fetchUsersPages } from "@/lib/data";
import Link from "next/link";
import { Suspense } from "react";
import { Metadata } from "next";
import Pagination from "@/components/pagination";

export const metadata: Metadata = {
  title: "Akun",
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
          { label: "Akun", href: "/dashboard/akun" },
        ]}
      >
        <Link href="/dashboard/akun/tambah" className={buttonVariants()}>
          Tambah
        </Link>
      </DashboardHeader>
      <div>
        <div className="px-5 py-3">
          <Search placeholder="Cari akun..." />
        </div>
        <Suspense key={currentPage} fallback={<TableSkeleton />}>
          <AkunTable currentPage={currentPage} query={query} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </>
  );
}
