import { DashboardHeader } from "@/components/dashboard-header";
import { Suspense } from "react";
import Pagination from "@/components/pagination";
import { fetchPostPages } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { TableSkeleton } from "@/components/table-skeleton";
import Search from "@/components/search";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PostTable } from "@/components/post/post-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post",
  description: "Data post Masjid Zaid bin Tsabit",
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
  const totalPages = await fetchPostPages(query);

  return (
    <div className="px-5">
      <DashboardHeader
        title="Post"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Post", href: "/dashboard/post" },
        ]}
      >
        <Link href="/dashboard/post/tambah" className={cn(buttonVariants())}>
          Tambah
        </Link>
      </DashboardHeader>
      <div>
        <div className="px-5 py-3">
          <Search placeholder="Cari post (judul, jenis)..." />
        </div>
        <Suspense key={currentPage} fallback={<TableSkeleton />}>
          {/* <JamaahTable currentPage={currentPage} query={query} /> */}
          <PostTable currentPage={currentPage} query={query} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
