import { db } from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredPemasukan(currentPage: number) {
  noStore();

  try {
    const data = await db.pemasukan.findMany({
      orderBy: {
        createdAt: "desc",
      },
      skip: (currentPage - 1) * ITEMS_PER_PAGE,
      take: ITEMS_PER_PAGE,
    });

    return data;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Gagal mengambil data pemasukan");
  }
}

export async function fetchPemasukanPages() {
  try {
    const totalItems = await db.pemasukan.count();
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Gagal mengambil jumlah halaman pemasukan");
  }
}

export async function fetchFilteredPengeluaran(currentPage: number) {
  noStore();

  try {
    const data = await db.pengeluaran.findMany({
      orderBy: {
        createdAt: "desc",
      },
      skip: (currentPage - 1) * ITEMS_PER_PAGE,
      take: ITEMS_PER_PAGE,
    });

    return data;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Gagal mengambil data pengeluaran");
  }
}

export async function fetchPengeluaranPages() {
  try {
    const totalItems = await db.pengeluaran.count();
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Gagal mengambil jumlah halaman pengeluaran");
  }
}
