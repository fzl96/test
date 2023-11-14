import { ArtikelCards } from "@/components/artikel-cards";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Pagination from "@/components/pagination";
import Search from "@/components/search";
import { fetchArtikelPages } from "@/lib/home-data";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikel",
  description: "Artikel terbaru dari Masjid Zaid bin Tsabit",
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
        Artikel
      </h1>
      <div className="py-3">
        <Search placeholder="Cari artikel..." />
      </div>
      <Suspense key={currentPage} fallback={<>Loading...</>}>
        {/* <ArtikelTable currentPage={currentPage} query={query} /> */}
        <ArtikelCards currentPage={currentPage} query={query} />
      </Suspense>
      <div className="my-5 flex w-full justify-center">
        <Pagination totalPages={totalPages || 0} />
      </div>
    </MaxWidthWrapper>
  );
}
