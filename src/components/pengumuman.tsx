import { fetchLatestPengumuman } from "@/lib/home-data";
import Image from "next/image";
import { removeHtmlTags } from "@/lib/utils";
import Link from "next/link";
import { Post } from "@/lib/definitions";

export default async function Pengumuman() {
  const pengumuman = await fetchLatestPengumuman();

  return (
    <div className="px-8">
      <div className="-m-2 rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl  flex-col space-y-3">
        <div className="grid">
          {pengumuman.map((pengumuman: Post) => {
            return (
              <div className="border-b p-5 flex gap-5" key={pengumuman.id}>
                <div className="w-[200px] relative hidden md:block">
                  <Link href={`/post/${pengumuman.slug}`}>
                    <Image
                      src={pengumuman.thumbnail || ""}
                      alt={pengumuman.judul}
                      fill={true}
                      objectFit="cover"
                      // sizes="200px"
                      className="hidden md:block rounded-md"
                    />
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href={`/post/${pengumuman.slug}`}>
                    <h2 className="text-base font-semibold leading-6">
                      {pengumuman.judul}
                    </h2>
                    <p className="mt-2 text-zinc-700">
                      {pengumuman.konten.length > 100
                        ? removeHtmlTags(pengumuman.konten.slice(0, 100)) +
                          "..."
                        : removeHtmlTags(pengumuman.konten)}
                    </p>
                  </Link>
                  <Link href={`/post/${pengumuman.slug}`}>
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
