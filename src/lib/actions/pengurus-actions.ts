"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { pengurusSchema } from "@/lib/validations/form";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import bcrypt from "bcryptjs";

type FormData = z.infer<typeof pengurusSchema>;

export async function createPengurus(formData: FormData) {
  const result = pengurusSchema.safeParse(formData);

  if (!result.success) {
    return { error: "Data tidak valid" };
  }

  const { nama, jabatan, foto, noHp } = result.data;

  try {
    const pengurus = await db.pengurus.create({
      data: {
        nama,
        jabatan,
        foto,
        noHp,
      },
    });

    revalidatePath("/dashboard/pengurus");
    return { pengurus };
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") return { error: "Username sudah digunakan" };
    } else {
      console.log(error);
      return { error: "Terjadi kesalahan, gagal membuat pengurus baru" };
    }
  }
}

export async function updatePengurus(id: string, formData: FormData) {
  const result = pengurusSchema.safeParse(formData);

  if (!result.success) {
    return { error: "Data tidak valid" };
  }

  const { nama, jabatan, foto, noHp } = result.data;

  try {
    const pengurus = await db.pengurus.update({
      where: { id: id },
      data: {
        nama,
        jabatan,
        foto,
        noHp,
      },
    });

    revalidatePath("/dashboard/pengurus");
    return { pengurus };
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") return { error: "Username sudah digunakan" };
    } else {
      console.log(error);
      return { error: "Terjadi kesalahan, gagal mengupdate pengurus" };
    }
  }
}

export async function deletePengurus(id: string) {
  try {
    await db.pengurus.delete({
      where: { id: id },
    });

    revalidatePath("/dashboard/pengurus");
    return { message: "Berhasil menghapus pengurus" };
  } catch (error) {
    console.log(error);
    return { error: "Terjadi kesalahan, gagal menghapus pengurus" };
  }
}
