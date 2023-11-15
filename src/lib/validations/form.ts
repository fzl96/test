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

export const inventarisSchema = z.object({
  nama: z.string().min(1, { message: "Nama harus diisi" }),
  jumlah: z.coerce
    .number({
      required_error: "Jumlah harus diisi",
      invalid_type_error: "Jumlah harus berupa angka",
    })
    .min(0, { message: "Jumlah harus positif" }),
  keterangan: z.string().optional(),
});

export const jamaahSchema = z.object({
  nama: z.string().min(1, { message: "Nama harus diisi" }),
  status: z.enum([
    "Kepala Keluarga",
    "Istri",
    "Anak",
    "Orang Tua",
    "Famili Lain",
  ]),
  pekerjaan: z.string().min(1, { message: "Pekerjaan harus diisi" }),
  penghasilan: z.coerce
    .number({
      required_error: "Jumlah harus diisi",
      invalid_type_error: "Jumlah harus berupa angka",
    })
    .min(0, { message: "Jumlah harus positif" }),
  alamat: z.string().min(1, { message: "Alamat harus diisi" }),
  noHp: z.string().optional(),
});

export const akunSchema = z.object({
  nama: z.string().min(1, { message: "Nama harus diisi" }),
  username: z.string().min(4, { message: "Username minimal 4 karakter" }),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
  role: z.enum(["ADMIN", "PENGURUS"]),
});

export const pengurusSchema = z.object({
  nama: z.string().min(1, { message: "Nama harus diisi" }),
  jabatan: z.enum([
    "PENASEHAT",
    "KETUA",
    "WAKIL_KETUA",
    "SEKRETARIS",
    "BIDANG_DANA",
    "BIDANG_PENDIDIKAN_DAN_DAKWAH",
    "BIDANG_SARANA_DAN_PRASARANA",
    "BIDANG_SOSIAL",
    "BIDANG_KEMITRAAN_DAN_INFOKOM",
    "BIDANG_KEAMANAN_DAN_KETERTIBAN",
    "IMAM",
    "MUADZIN",
  ]),
  foto: z.string().optional(),
  noHp: z.string().optional(),
});

export const userSettingFormSchema = z.object({
  nama: z.string().optional(),
  username: z.string().optional(),
  newPassword: z.string().optional(),
  oldPassword: z.string().optional(),
  confirmPassword: z.string().optional(),
});

export const postSchema = z.object({
  judul: z.string().min(1, { message: "Judul harus diisi" }),
  thumbnail: z.string().optional(),
  authorId: z.string().min(1, { message: "Author harus diisi" }),
  konten: z.string().min(1, { message: "Konten harus diisi" }),
  jenis: z.enum(["ARTIKEL", "PENGUMUMAN", "KEGIATAN"]),
  tanggal: z.date().optional(),
});
