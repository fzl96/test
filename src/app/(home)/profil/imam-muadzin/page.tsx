import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";
import { fetchPengurus } from "@/lib/home-data";
import { Suspense } from "react";
import { PengurusCard } from "@/components/pengurus-card";

export default async function Page() {
  const pengurus = await fetchPengurus();

  // console.log(pengurus);

  return (
    <MaxWidthWrapper className="mb-12 md:mt-20 mt-10 flex flex-col w-full items-center min-h-screen">
      <div className="flex flex-col gap-5">
        <div className="">
          <h1 className="mb-0 text-center text-4xl md:text-5xl font-bold tracking-tight">
            Imam dan Muadzin
          </h1>
          <h1 className="mt-0 text-center text-4xl md:text-5xl font-bold tracking-tight">
            Masjid Zaid bin Tsabit
          </h1>
        </div>
        <hr />
        {/* <Suspense fallback={<>Loading...</>}> */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-5 px-5 md:px-0">
          {pengurus
            ?.sort((pgrs) => (pgrs.jabatan === "IMAM" ? -1 : 1))
            .map((pgrs) => (
              <PengurusCard key={pgrs.id} pengurus={pgrs} />
            ))}
        </div>
        {/* </Suspense> */}
      </div>
    </MaxWidthWrapper>
  );
}
