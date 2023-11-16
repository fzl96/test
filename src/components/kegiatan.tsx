import { fetchLatestKegiatan } from "@/lib/home-data";
import { Post } from "@/lib/definitions";
import { PostCard } from "./post-card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default async function Kegiatan() {
  const kegiatan = await fetchLatestKegiatan();

  return (
    <div className="px-8 w-full flex flex-col items-center">
      <div className="grid xl:grid-cols-3 auto-rows-max lg:grid-cols-2 md:gap-14 gap-8 items-stretch">
        {kegiatan?.map((kegiatan: Post) => (
          <PostCard className="-m-2 lg:-m-4" post={kegiatan} />
        ))}
      </div>
      <>
        <Link className={cn(buttonVariants(), "mt-10")} href="/post/kegiatan">
          Lihat Semua Kegiatan
        </Link>
      </>
    </div>
  );
}
