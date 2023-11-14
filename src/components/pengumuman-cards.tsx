import { fetchFilteredPengumuman } from "@/lib/home-data";
import { PostCard } from "./post-card";

export async function PengumumanCards({
  currentPage,
  query,
}: {
  currentPage: number;
  query: string;
}) {
  const pengumuman = await fetchFilteredPengumuman(currentPage, query);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {pengumuman?.map((pengumuman) => (
        <PostCard key={pengumuman.slug} post={pengumuman} />
      ))}
    </div>
  );
}
