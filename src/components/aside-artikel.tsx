import { Post } from "@/lib/definitions";
import { fetchLatestArtikel } from "@/lib/home-data";
import Link from "next/link";

export async function AsideArtikel() {
  const artikel = await fetchLatestArtikel();

  return (
    <div>
      <ul className="list-none p-0">
        {artikel.map((artikel: Post) => (
          <li className="" key={artikel.id}>
            <Link href={`/post/${artikel.slug}`}>{artikel.judul}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
