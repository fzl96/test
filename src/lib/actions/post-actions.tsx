"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { postSchema } from "@/lib/validations/form";
import { revalidatePath } from "next/cache";
import { createSlug } from "@/lib/utils";

type FormData = z.infer<typeof postSchema>;

export async function createPost(formData: FormData) {
  const result = postSchema.safeParse(formData);

  if (!result.success) {
    return { error: result.error.format() };
  }

  const { authorId, judul, konten, jenis, thumbnail, tanggal } = result.data;
  const slug = judul.toLowerCase().replace(/\s/g, "-");

  try {
    const post = await db.post.create({
      data: {
        penulis: {
          connect: {
            id: authorId,
          },
        },
        judul,
        konten,
        jenis,
        thumbnail,
        tanggal,
        slug,
      },
    });

    revalidatePath("/dashboard/post");
    return { post };
  } catch (error) {
    console.log("Database error: ", error);
    return { error: "Gagal membuat post baru" };
  }
}

export async function updatePost(id: string, formData: FormData) {
  const result = postSchema.safeParse(formData);

  if (!result.success) {
    return { error: result.error.format() };
  }

  const { judul, konten, jenis, thumbnail, tanggal } = result.data;
  const slug = createSlug(judul);

  try {
    const post = await db.post.update({
      where: {
        id,
      },
      data: {
        judul,
        konten,
        jenis,
        thumbnail,
        tanggal,
        slug,
      },
    });

    revalidatePath("/dashboard/post");
    return { post };
  } catch (error) {
    console.log("Database error: ", error);
    return { error: "Gagal membuat post baru" };
  }
}

export async function deletePost(id: string) {
  try {
    await db.post.delete({
      where: {
        id,
      },
    });

    revalidatePath("/dashboard/post");
    return { post: true };
  } catch (error) {
    console.log("Database error: ", error);
    return { error: "Gagal menghapus post" };
  }
}
