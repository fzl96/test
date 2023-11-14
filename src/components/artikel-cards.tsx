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
    <div className="grid md:grid-cols-3 gap-4">
      {artikel?.map((artikel: any) => (
        <PostCard key={artikel.slug} post={artikel} />
      ))}
    </div>
  );
}
