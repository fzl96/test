import { Post } from "@/lib/definitions";
import { fetchFiveLatestKegiatan } from "@/lib/home-data";
import Link from "next/link";

export async function AsideKegiatan() {
  const kegiatan = await fetchFiveLatestKegiatan();

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
