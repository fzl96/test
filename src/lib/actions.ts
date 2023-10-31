"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { pemasukanCreateSchema } from "@/lib/validations/form";
import { DateTime } from "luxon";
import { revalidatePath } from "next/cache";

type FormData = z.infer<typeof pemasukanCreateSchema>;
const jakartaTimezone = "Asia/Jakarta";

export async function createPemasukan(formData: FormData) {
  const result = pemasukanCreateSchema.safeParse(formData);

  if (!result.success) {
    return { error: result.error };
  }

  const { keterangan, jumlah } = result.data;

  try {
    const data = await db.pemasukan.create({
      data: {
        keterangan,
        jumlah,
      },
    });

    return { data };
  } catch (error) {
    console.log("Database Error: ", error);
    return { error: "Gagal membuat pemasukan baru" };
  }
}

export async function updatePemasukan(id: string, formData: FormData) {
  const result = pemasukanCreateSchema.safeParse(formData);

  if (!result.success) {
    return { error: result.error };
  }

  const { keterangan, jumlah } = result.data;

  try {
    const data = await db.pemasukan.update({
      where: {
        id,
      },
      data: {
        keterangan,
        jumlah,
      },
    });

    revalidatePath("/dashboard/keuangan/pemasukan");
    return { data };
  } catch (error) {
    console.log("Database Error: ", error);
    return { error: "Gagal mengupdate pemasukan" };
  }
}

export async function deletePemasukan(id: string) {
  try {
    const data = await db.pemasukan.delete({
      where: {
        id,
      },
    });

    return { data };
  } catch (error) {
    console.log("Database Error: ", error);
    return { error: "Gagal menghapus pemasukan" };
  }
}
