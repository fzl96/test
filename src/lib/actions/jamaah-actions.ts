"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { jamaahSchema } from "@/lib/validations/form";
import { revalidatePath } from "next/cache";

type FormData = z.infer<typeof jamaahSchema>;

export async function createJamaah(formData: FormData) {
  const result = jamaahSchema.safeParse(formData);

  if (!result.success) {
    return { error: result.error.format() };
  }

  const { nama, status, pekerjaan, penghasilan, alamat, noHp } = result.data;

  try {
    const jamaah = await db.jamaah.create({
      data: {
        nama,
        status,
        pekerjaan,
        penghasilan,
        alamat,
        noHp,
      },
    });

    return { jamaah };
  } catch (error) {
    console.log("Database error: ", error);
    return { error: "Gagal membuat jamaah baru" };
  }
}

export async function updateJamaah(id: string, formData: FormData) {
  const result = jamaahSchema.safeParse(formData);

  if (!result.success) {
    return { error: result.error.format() };
  }

  const { nama, status, pekerjaan, penghasilan, alamat, noHp } = result.data;

  try {
    const jamaah = await db.jamaah.update({
      where: {
        id: id,
      },
      data: {
        nama,
        status,
        pekerjaan,
        penghasilan,
        alamat,
        noHp,
      },
    });

    revalidatePath("/dashboard/jamaah");
    return { jamaah };
  } catch (error) {
    console.log("Database error: ", error);
    return { error: "Gagal membuat jamaah baru" };
  }
}

export async function deleteJamaah(id: string) {
  try {
    await db.jamaah.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/dashboard/jamaah");
    return { jamaah: true };
  } catch (error) {
    console.log("Database error: ", error);
    return { error: "Gagal menghapus jamaah" };
  }
}
