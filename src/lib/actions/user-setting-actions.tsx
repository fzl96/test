"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { userSettingFormSchema } from "@/lib/validations/form";
import { Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
import { signOut } from "../auth";
import { redirect } from "next/navigation";

type FormData = z.infer<typeof userSettingFormSchema>;

export async function updateUser(id: string, formData: FormData) {
  const result = userSettingFormSchema.safeParse(formData);

  if (!result.success) {
    return { error: "Data tidak valid" };
  }

  const { nama, username, newPassword, confirmPassword } = result.data;
  const dataToUpdate: Prisma.UserUpdateInput = {};
  if (nama) dataToUpdate.name = nama;
  if (username) dataToUpdate.username = username;
  if (newPassword) {
    if (newPassword !== confirmPassword)
      return { error: "Password tidak sama" };
    if (newPassword.length < 4) return { error: "Password minimal 4 karakter" };

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    dataToUpdate.password = hashedPassword;
  }

  try {
    await db.user.update({
      where: { id: id },
      data: dataToUpdate,
    });

    return { message: "Berhasil mengupdate" };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") return { error: "Username sudah digunakan" };
    } else {
      console.log(error);
      return { error: "Terjadi kesalahan, gagal mengupdate pengguna" };
    }
  }
}

export async function logout() {
  await signOut();
}
