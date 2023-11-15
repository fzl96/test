import { fetchFilteredArtikel } from "@/lib/home-data";
import { PostCard } from "./post-card";

export async function ArtikelCards({
  currentPage,
  query,
}: {
  currentPage: number;
  query: string;
}) {
  const artikel = await fetchFilteredArtikel(currentPage, query);

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4">
      {artikel?.map((artikel: any) => (
        <PostCard key={artikel.slug} post={artikel} />
      ))}
    </div>
  );
}
