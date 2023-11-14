import { fetchFilteredKegiatan } from "@/lib/home-data";
import { PostCard } from "./post-card";

export async function KegiatanCards({
  currentPage,
  query,
}: {
  currentPage: number;
  query: string;
}) {
  const kegiatan = await fetchFilteredKegiatan(currentPage, query);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {kegiatan?.map((kegiatan) => (
        <PostCard key={kegiatan.slug} post={kegiatan} />
      ))}
    </div>
  );
}
