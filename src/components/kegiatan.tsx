import { fetchFiveLatestKegiatan } from "@/lib/home-data";
import Image from "next/image";
import { removeHtmlTags } from "@/lib/utils";
import Link from "next/link";
import { Post } from "@/lib/definitions";

export default async function Kegiatan() {
  const kegiatan = await fetchFiveLatestKegiatan();

  return (
    <div className="px-8">
      <ol className="grid md:grid-cols-3 md:gap-14 gap-8">
        {kegiatan?.map((kegiatan: Post) => (
          <li className="md:flex-1" key={kegiatan.id}>
            <div className="-m-2 rounded-xl bg-gray-400/5 p-5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 md:p-4 flex-col space-y-3">
              <Link href={`/post/${kegiatan.slug}`}>
                <Image
                  src={kegiatan.thumbnail || ""}
                  alt={kegiatan.judul}
                  width={350}
                  height={200}
                  className="rounded-md"
                />
              </Link>
              <div className="flex flex-col gap-3">
                <Link href={`/post/${kegiatan.slug}`}>
                  <h2 className="text-lg font-semibold leading-6">
                    {kegiatan.judul}
                  </h2>
                  <p className="mt-2 text-zinc-700">
                    {kegiatan.konten.length > 100
                      ? removeHtmlTags(kegiatan.konten.slice(0, 100)) + "..."
                      : removeHtmlTags(kegiatan.konten)}
                  </p>
                </Link>
                <Link href={`/post/${kegiatan.slug}`}>Baca Selengkapnya</Link>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
