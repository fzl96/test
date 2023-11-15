"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { inventarisSchema } from "@/lib/validations/form";

type FormData = z.infer<typeof inventarisSchema>;

export async function createInventaris(formData: FormData) {
  const result = inventarisSchema.safeParse(formData);

  if (!result.success) {
    return { error: "Data tidak valid" };
  }

  const { nama, jumlah, keterangan } = result.data;

  try {
    const inventaris = await db.inventaris.create({
      data: {
        nama,
        jumlah,
        keterangan,
      },
    });

    return { inventaris };
  } catch (error) {
    console.log("Database error: ", error);
    return { error: "Gagal membuat inventaris baru" };
  }
}

export async function updateInventaris(id: string, formData: FormData) {
  const result = inventarisSchema.safeParse(formData);

  if (!result.success) {
    return { error: "Data tidak valid" };
  }

  const { nama, jumlah, keterangan } = result.data;

  try {
    const inventaris = await db.inventaris.update({
      where: {
        id: id,
      },
      data: {
        nama,
        jumlah,
        keterangan,
      },
    });

    return { inventaris };
  } catch (error) {
    console.log("Database error: ", error);
    return { error: "Gagal membuat inventaris baru" };
  }
}

export async function deleteInventaris(id: string) {
  try {
    await db.inventaris.delete({
      where: {
        id: id,
      },
    });

    return { success: true };
  } catch (error) {
    console.log("Database error: ", error);
    return { error: "Gagal menghapus inventaris" };
  }
}
