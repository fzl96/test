import { db } from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";
import { DateTime } from "luxon";
import { startOfDay, endOfDay, startOfMonth, endOfMonth } from "date-fns";
import { months } from "@/config/dashboard";
import { Monthly } from "./definitions";

export async function fetchFiveLatestKegiatan() {
  const kegiatan = await db.post.findMany({
    take: 3,
    orderBy: {
      updatedAt: "desc",
    },
    where: {
      jenis: "KEGIATAN",
    },
  });

  // console.log("kegiatan", kegiatan);

  return kegiatan;
}

export async function fetchLatestArtikel() {
  const artikel = await db.post.findMany({
    take: 4,
    orderBy: {
      updatedAt: "desc",
    },
    where: {
      jenis: "ARTIKEL",
    },
  });

  // console.log("artikel", artikel);

  return artikel;
}

export async function fetchLatestPengumuman() {
  const pengumuman = await db.post.findMany({
    take: 4,
    orderBy: {
      updatedAt: "desc",
    },
    where: {
      jenis: "PENGUMUMAN",
    },
  });

  return pengumuman;
}

export async function fetchPostBySlug(slug: string) {
  const post = await db.post.findUnique({
    include: {
      penulis: {
        select: {
          name: true,
        },
      },
    },
    where: {
      slug,
    },
  });

  return post;
}

const ITEMS_PER_PAGE = 6;

export async function fetchArtikelPages(query: string) {
  noStore();
  try {
    const totalItems = await db.post.count({
      where: {
        judul: {
          contains: query,
        },
        jenis: "ARTIKEL",
      },
    });

    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchFilteredArtikel(currentPage: number, query: string) {
  try {
    const data = await db.post.findMany({
      where: {
        judul: {
          contains: query,
        },
        jenis: "ARTIKEL",
      },
      orderBy: {
        updatedAt: "desc",
      },
      skip: (currentPage - 1) * ITEMS_PER_PAGE,
      take: ITEMS_PER_PAGE,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function fetchPengumumanPages(query: string) {
  noStore();
  try {
    const totalItems = await db.post.count({
      where: {
        judul: {
          contains: query,
        },
        jenis: "PENGUMUMAN",
      },
    });

    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchFilteredPengumuman(
  currentPage: number,
  query: string
) {
  try {
    const data = await db.post.findMany({
      where: {
        judul: {
          contains: query,
        },
        jenis: "PENGUMUMAN",
      },
      orderBy: {
        updatedAt: "desc",
      },
      skip: (currentPage - 1) * ITEMS_PER_PAGE,
      take: ITEMS_PER_PAGE,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function fetchKegiatanlPages(query: string) {
  noStore();
  try {
    const totalItems = await db.post.count({
      where: {
        judul: {
          contains: query,
        },
        jenis: "KEGIATAN",
      },
    });

    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchFilteredKegiatan(
  currentPage: number,
  query: string
) {
  try {
    const data = await db.post.findMany({
      where: {
        judul: {
          contains: query,
        },
        jenis: "KEGIATAN",
      },
      orderBy: {
        updatedAt: "desc",
      },
      skip: (currentPage - 1) * ITEMS_PER_PAGE,
      take: ITEMS_PER_PAGE,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}
