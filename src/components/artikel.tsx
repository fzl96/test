import { fetchLatestArtikel } from "@/lib/home-data";
import Image from "next/image";
import { cn, removeHtmlTags } from "@/lib/utils";
import Link from "next/link";
import { Post } from "@/lib/definitions";
import { buttonVariants } from "./ui/button";

export default async function Kegiatan() {
  const artikel = await fetchLatestArtikel();

  return (
    <div className="px-8 flex flex-col items-center">
      <div className="grid md:grid-cols-3 md:gap-14 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="-m-2 rounded-xl bg-gray-400/5 p-5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 md:p-4 flex-col space-y-3">
            <Link href={`/post/${artikel[0].slug}`}>
              <div className="w-full h-[200px] relative hidden md:block">
                <Image
                  src={artikel[0].thumbnail || ""}
                  alt={artikel[0].judul}
                  fill={true}
                  objectFit="cover"
                  className="rounded-md ring-2 ring-gray-900/10 shadow-md"
                />
              </div>
            </Link>
            <div className="flex flex-col gap-3">
              <Link href={`/post/${artikel[0].slug}`}>
                <h2 className="text-lg font-semibold leading-6">
                  {artikel[0].judul}
                </h2>
                <p className="mt-2 text-zinc-700">
                  {artikel[0].konten.length > 100
                    ? removeHtmlTags(artikel[0].konten.slice(0, 170)) + "..."
                    : removeHtmlTags(artikel[0].konten)}
                </p>
              </Link>
              <Link href={`/post/${artikel[0].slug}`}>Baca Selengkapnya</Link>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-10">
          {artikel.map((artikel: Post, index: number) => {
            if (index === 0) return;

            return (
              <div
                className="-m-2 rounded-xl bg-gray-400/5 p-5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 md:p-4 md:flex gap-5"
                key={artikel.id}
              >
                <Link href={`/post/${artikel.slug}`}>
                  <div className="relative w-[200px] h-[130px] ">
                    <Image
                      src={artikel.thumbnail || ""}
                      alt={artikel.judul}
                      // width={200}
                      // height={100}
                      fill
                      objectFit="cover"
                      className="rounded-md h-full w-full object-cover ring-2 ring-gray-900/10 shadow-md "
                    />
                  </div>
                </Link>
                <div className="flex flex-col gap-3">
                  <Link href={`/post/${artikel.slug}`}>
                    <h2 className="text-base font-semibold leading-6">
                      {artikel.judul}
                    </h2>
                    <p className="mt-2 text-zinc-700 text-sm">
                      {artikel.konten.length > 100
                        ? removeHtmlTags(artikel.konten.slice(0, 100)) + "..."
                        : removeHtmlTags(artikel.konten)}
                    </p>
                  </Link>
                  <Link href={`/post/${artikel.slug}`} className="text-sm">
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <>
        <Link href="/post/artikel" className={cn(buttonVariants(), "mt-10")}>
          Lihat Semua Artikel
        </Link>
      </>
    </div>
  );
}
