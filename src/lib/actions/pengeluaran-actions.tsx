"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { pengeluaranSchema } from "@/lib/validations/form";
import { DateTime } from "luxon";
import { revalidatePath } from "next/cache";

type FormData = z.infer<typeof pengeluaranSchema>;

export async function createPengeluaran(formdata: FormData) {
  const result = pengeluaranSchema.safeParse(formdata);

  if (!result.success) {
    return { error: "Data tidak valid" };
  }

  const { jumlah, keterangan } = result.data;

  try {
    const pengeluaran = await db.pengeluaran.create({
      data: {
        jumlah,
        keterangan,
      },
    });

    return { pengeluaran };
  } catch (error) {
    console.log("Database error: ", error);
    return { error: "Gagal membuat pengeluaran baru" };
  }
}

export async function updatePengeluaran(id: string, formdata: FormData) {
  const result = pengeluaranSchema.safeParse(formdata);

  if (!result.success) {
    return { error: "Data tidak valid" };
  }

  const { jumlah, keterangan } = result.data;

  try {
    const pengeluaran = await db.pengeluaran.update({
      where: {
        id: id,
      },
      data: {
        jumlah,
        keterangan,
      },
    });

    return { pengeluaran };
  } catch (error) {
    console.log("Database error: ", error);
    return { error: "Gagal membuat pengeluaran baru" };
  }
}

export async function deletePengeluaran(id: string) {
  try {
    const pengeluaran = await db.pengeluaran.delete({
      where: {
        id: id,
      },
    });

    return { pengeluaran };
  } catch (error) {
    console.log("Database error: ", error);
    return { error: "Gagal menghapus pengeluaran" };
  }
}
