import { z } from "zod";

export const pemasukanCreateSchema = z.object({
  keterangan: z.string().optional(),
  jumlah: z
    .number({
      required_error: "Jumlah harus diisi",
      invalid_type_error: "Jumlah harus berupa angka",
    })
    .positive({
      message: "Jumlah harus lebih dari 0",
    }),
});

export const pengeluaranSchema = z.object({
  keterangan: z.string().optional(),
  jumlah: z
    .number({
      required_error: "Jumlah harus diisi",
      invalid_type_error: "Jumlah harus berupa angka",
    })
    .positive({
      message: "Jumlah harus lebih dari 0",
    }),
});
