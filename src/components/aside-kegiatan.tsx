import { Post } from "@/lib/definitions";
import { fetchLatestKegiatan } from "@/lib/home-data";
import Link from "next/link";

export async function AsideKegiatan() {
  const kegiatan = await fetchLatestKegiatan(5);

  return (
    <div>
      <ul className="list-none p-0">
        {kegiatan.map((kegiatan: Post) => (
          <li className="" key={kegiatan.id}>
            <Link href={`/post/${kegiatan.slug}`}>{kegiatan.judul}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
