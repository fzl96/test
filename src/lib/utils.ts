import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Jadwal } from "./definitions";
import { differenceInMinutes } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  const newDate = format(date, "eeee, d MMM yyyy", {
    locale: id,
  });
  return newDate;
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatKeterangan(keterangan: string) {
  return keterangan.length > 30 ? `${keterangan.slice(0, 30)}...` : keterangan;
}

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export function createSlug(title: string) {
  const slug = title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^\w-]+/g, ""); // Remove non-word characters (excluding dashes)

  return slug;
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function removeHtmlTags(string: string) {
  return string.replace(/(<([^>]+)>)/gi, "");
}

export function getNextPrayerTime(jadwal: Jadwal) {
  const now = new Date();
  now.setHours(now.getHours() + 7);

  if (!jadwal.data) return null;

  const jadwalArray = [
    { waktu: "Subuh", jadwal: jadwal.data.jadwal.subuh },
    { waktu: "Dzuhur", jadwal: jadwal.data.jadwal.dzuhur },
    { waktu: "Ashar", jadwal: jadwal.data.jadwal.ashar },
    { waktu: "Maghrib", jadwal: jadwal.data.jadwal.maghrib },
    { waktu: "Isya", jadwal: jadwal.data.jadwal.isya },
  ];

  const jadwalSholat = jadwalArray.map((item) => {
    const jamSplit = item.jadwal.split(":");
    const jamSholat = new Date();
    jamSholat.setHours(parseInt(jamSplit[0]));
    jamSholat.setHours(jamSholat.getHours() + 7);
    jamSholat.setMinutes(parseInt(jamSplit[1]));
    jamSholat.setSeconds(0);
    jamSholat.setMilliseconds(0);
    // console.log(jamSholat);
    return {
      waktu: item.waktu,
      jadwal: jamSholat,
    };
  });

  for (let i = 0; i < jadwalSholat.length; i++) {
    const prayer = jadwalSholat[i];
    // if last index, return first index
    if (prayer.jadwal > now) {
      return {
        next: prayer.waktu,
      };
    }
  }
  return {
    next: jadwalSholat[0].waktu,
  };
}
