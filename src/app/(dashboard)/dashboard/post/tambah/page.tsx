import { PostForm } from "@/components/editor/form";
import { auth } from "@/lib/auth";
import { createPost } from "@/lib/actions/post-actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tambah Post",
  description: "Tambah post Masjid Zaid bin Tsabit",
};

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  const user = session?.user;

  return (
    <div>
      <PostForm
        // @ts-ignore
        authorId={user.id}
        createFn={createPost}
        breadCrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Post", href: "/dashboard/post" },
          { label: "Tambah", href: "/dashboard/post/tambah" },
        ]}
      />
    </div>
  );
}
