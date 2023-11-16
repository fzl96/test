import { siteConfig } from "@/config/site";
import { cn, removeHtmlTags } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  post: {
    id: string;
    judul: string;
    slug: string;
    konten: string;
    jenis: "KEGIATAN" | "PENGUMUMAN" | "ARTIKEL";
    thumbnail: string | null;
    penulisId: string | null;
    tanggal: Date;
    updatedAt: Date;
    createdAt: Date;
  };
}

export function PostCard({ post, className }: PostCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-gray-400/5 p-5 ring-1 ring-inset ring-gray-900/10  lg:rounded-lg lg:p-4 md:p-4 flex flex-col md:gap-4 gap-2 justify-between",
        className
      )}
    >
      <div className="space-y-2">
        <Link href={`/post/${post.slug}`}>
          <Image
            src={post.thumbnail || siteConfig.thumbnailPlaceholder}
            alt={post.judul}
            width={350}
            height={200}
            className="rounded-md h-[13rem] w-full object-cover ring-2 ring-gray-900/10 shadow-md"
          />
        </Link>
        <div className="flex flex-col gap-3">
          <Link href={`/post/${post.slug}`}>
            <h2 className="text-lg font-semibold leading-6 hover:underline">
              {post.judul}
            </h2>
            <p className="mt-2 text-zinc-700 hover:underline">
              {post.konten.length > 100
                ? removeHtmlTags(post.konten.slice(0, 100)) + "..."
                : removeHtmlTags(post.konten)}
            </p>
          </Link>
        </div>
      </div>
      <Link href={`/post/${post.slug}`} className="flex-end hover:underline">
        Baca Selengkapnya
      </Link>
    </div>
  );
}
