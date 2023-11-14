import { PostForm } from "@/components/editor/form";
import { auth } from "@/lib/auth";
import { updatePost } from "@/lib/actions/post-actions";
import { fetchPostById } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Post",
  description: "Edit post Masjid Zaid bin Tsabit",
};

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const session = await auth();
  const post = await fetchPostById(id);

  if (!session?.user) {
    return null;
  }

  const user = session?.user;

  return (
    <div>
      <PostForm
        // @ts-ignore
        authorId={user.id}
        updateFn={updatePost}
        post={{
          id: post?.id || "",
          judul: post?.judul || "",
          konten: post?.konten || "",
          jenis: post?.jenis || "KEGIATAN",
          thumbnail: post?.thumbnail || "",
          tanggal: post?.tanggal || new Date(),
          slug: post?.slug || "",
        }}
        breadCrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Post", href: "/dashboard/post" },
          { label: "Edit", href: "/dashboard/post/edit" },
        ]}
      />
    </div>
  );
}
