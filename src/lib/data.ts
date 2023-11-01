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

export async function fetchFilteredInventaris(
  currentPage: number,
  query: string
) {
  noStore();

  try {
    const data = await db.inventaris.findMany({
      where: {
        nama: {
          contains: query,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: (currentPage - 1) * ITEMS_PER_PAGE,
      take: ITEMS_PER_PAGE,
    });

    return data;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Gagal mengambil data inventaris");
  }
}

export async function fetchInventarisPages(query: string) {
  try {
    const totalItems = await db.inventaris.count({
      where: {
        nama: {
          contains: query,
        },
      },
    });
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Gagal mengambil jumlah halaman inventaris");
  }
}

export async function fetchFilteredJamaah(currentPage: number, query: string) {
  noStore();

  try {
    const data = await db.jamaah.findMany({
      where: {
        nama: {
          contains: query,
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
      skip: (currentPage - 1) * ITEMS_PER_PAGE,
      take: ITEMS_PER_PAGE,
    });

    return data;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Gagal mengambil data jamaah");
  }
}

export async function fetchJamaahById(id: string) {
  try {
    const data = await db.jamaah.findUnique({
      where: {
        id: id,
      },
    });

    return data;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Gagal mengambil data jamaah");
  }
}

export async function fetchJamaahPages(query: string) {
  try {
    const totalItems = await db.jamaah.count({
      where: {
        nama: {
          contains: query,
        },
      },
    });
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.log("Database Error: ", error);
    throw new Error("Gagal mengambil jumlah halaman jamaah");
  }
}
