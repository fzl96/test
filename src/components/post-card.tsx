import { removeHtmlTags } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
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

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="rounded-lg bg-gray-400/5 p-5 ring-1 ring-inset ring-gray-900/10  lg:rounded-lg lg:p-4 md:p-4 flex-col space-y-3">
      <Image
        src={post.thumbnail || ""}
        alt={post.judul}
        width={350}
        height={200}
        className="rounded-md"
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold leading-6">{post.judul}</h2>
        <p className="mt-2 text-zinc-700">
          {post.konten.length > 100
            ? removeHtmlTags(post.konten.slice(0, 100)) + "..."
            : removeHtmlTags(post.konten)}
        </p>
        <Link href={`/post/${post.slug}`}>Baca Selengkapnya</Link>
      </div>
    </div>
  );
}
