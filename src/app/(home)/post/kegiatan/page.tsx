import { KegiatanCards } from "@/components/kegiatan-cards";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Pagination from "@/components/pagination";
import Search from "@/components/search";
import { fetchArtikelPages } from "@/lib/home-data";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kegiatan",
  description: "Kegiatan terbaru dari Masjid Zaid bin Tsabit",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string };
}) {
  const currentPage = Number(searchParams?.page || 1);
  const query = searchParams?.query || "";
  const totalPages = await fetchArtikelPages(query);

  return (
    <MaxWidthWrapper className="mt-10">
      <h1 className="text-3xl text-center tracking-tight font-semibold">
        Aktivitas
      </h1>
      <div className="py-3">
        <Search placeholder="Cari Aktivitas..." />
      </div>
      <Suspense key={currentPage} fallback={<>Loading...</>}>
        <KegiatanCards currentPage={currentPage} query={query} />
      </Suspense>
      <div className="my-5 flex w-full justify-center">
        <Pagination totalPages={totalPages || 0} />
      </div>
    </MaxWidthWrapper>
  );
}
