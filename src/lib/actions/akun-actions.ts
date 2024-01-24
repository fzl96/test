"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { akunSchema } from "@/lib/validations/form";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import bcrypt from "bcryptjs";

type FormData = z.infer<typeof akunSchema>;

export async function createAkun(formData: FormData) {
  const result = akunSchema.safeParse(formData);

  if (!result.success) {
    return { error: "Data tidak valid" };
  }

  const { nama, username, password, confirmPassword, role } = result.data;

  if (!password) return { error: "Password tidak boleh kosong" };
  if (password.length < 4) return { error: "Password minimal 4 karakter" };
  if (password !== confirmPassword) return { error: "Password tidak sama" };

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const akun = await db.user.create({
      data: {
        name: nama,
        username,
        password: hashedPassword,
        role,
      },
    });

    revalidatePath("/dashboard/akun");
    return { akun };
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") return { error: "Username sudah digunakan" };
    } else {
      console.log(error);
      return { error: "Terjadi kesalahan, gagal membuat akun baru" };
    }
  }
}

export async function updateAkun(id: string, formData: FormData) {
  const result = akunSchema.safeParse(formData);

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
    const akun = await db.user.update({
      where: { id: id },
      data: dataToUpdate,
    });

    revalidatePath("/dashboard/akun");
    return { akun };
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") return { error: "Username sudah digunakan" };
    } else {
      console.log(error);
      return { error: "Terjadi kesalahan, gagal mengupdate akun" };
    }
  }
}

export async function deleteAkun(id: string) {
  const uid = process.env.ADMIN_UID;
  if (id === uid) return { error: "Akun ini tidak dapat dihapus" };
  try {
    await db.user.delete({
      where: { id: id },
    });

    revalidatePath("/dashboard/akun");
    return { message: "Berhasil menghapus akun" };
  } catch (error) {
    console.log(error);
    return { error: "Terjadi kesalahan, gagal menghapus akun" };
  }
}
