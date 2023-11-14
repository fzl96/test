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

  const { nama, username, password, confirmPassword, role } = result.data;

  console.log(
    nama,
    username,
    password,
    confirmPassword,
    role,
    "ini dari pengurus-actions"
  );

  if (!password) return { error: "Password tidak boleh kosong" };
  if (password.length < 4) return { error: "Password minimal 4 karakter" };
  if (password !== confirmPassword) return { error: "Password tidak sama" };

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const pengurus = await db.user.create({
      data: {
        name: nama,
        username,
        password: hashedPassword,
        role,
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

  const { nama, username, password, confirmPassword, role } = result.data;
  const dataToUpdate: Prisma.UserUpdateInput = { name: nama, username, role };

  if (password) {
    if (password !== confirmPassword) return { error: "Password tidak sama" };
    if (password.length < 4) return { error: "Password minimal 4 karakter" };

    const hashedPassword = await bcrypt.hash(password, 10);

    dataToUpdate.password = hashedPassword;
  }

  try {
    const pengurus = await db.user.update({
      where: { id: id },
      data: dataToUpdate,
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
    await db.user.delete({
      where: { id: id },
    });

    revalidatePath("/dashboard/pengurus");
    return { message: "Berhasil menghapus pengurus" };
  } catch (error) {
    console.log(error);
    return { error: "Terjadi kesalahan, gagal menghapus pengurus" };
  }
}
