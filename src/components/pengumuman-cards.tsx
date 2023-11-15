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
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4">
      {pengumuman?.map((pengumuman) => (
        <PostCard key={pengumuman.slug} post={pengumuman} />
      ))}
    </div>
  );
}
