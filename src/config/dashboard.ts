import { SideNavItem } from "@/lib/definitions";

export const sideNavItems: SideNavItem[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: "dashboard",
  },
  {
    title: "Keuangan",
    path: "/keuangan",
    icon: "wallet",
    submenu: true,
    subMenuItems: [
      { title: "Pemasukan", path: "/dashboard/keuangan/pemasukan" },
      { title: "Pengeluaran", path: "/dashboard/keuangan/pengeluaran" },
    ],
  },
  {
    title: "Inventaris",
    path: "/dashboard/inventaris",
    icon: "folder",
  },
  {
    title: "Jamaah",
    path: "/dashboard/jamaah",
    icon: "users",
  },
  {
    title: "Artikel",
    path: "/dashboard/artikel",
    icon: "newspaper",
  },
  {
    title: "Pengaturan",
    path: "/dashboard/pengaturan",
    icon: "settings",
  },
];

export const months: { value: number; label: string; short: string }[] = [
  { value: 1, label: "Januari", short: "Jan" },
  { value: 2, label: "Februari", short: "Feb" },
  { value: 3, label: "Maret", short: "Mar" },
  { value: 4, label: "April", short: "Apr" },
  { value: 5, label: "Mei", short: "Mei" },
  { value: 6, label: "Juni", short: "Jun" },
  { value: 7, label: "Juli", short: "Jul" },
  { value: 8, label: "Agustus", short: "Agu" },
  { value: 9, label: "September", short: "Sep" },
  { value: 10, label: "Oktober", short: "Okt" },
  { value: 11, label: "November", short: "Nov" },
  { value: 12, label: "Desember", short: "Des" },
];
