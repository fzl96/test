import { Post } from "@/lib/definitions";
import { fetchLatestPengumuman } from "@/lib/home-data";
import Link from "next/link";

export async function AsidePengumuman() {
  const pengumuman = await fetchLatestPengumuman();

  return (
    <div>
      <ul className="list-none p-0">
        {pengumuman.map((pengumuman: Post) => (
          <li className="" key={pengumuman.id}>
            <Link href={`/post/${pengumuman.slug}`}>{pengumuman.judul}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
