import { MainNavItem, SidebarNavItem, SideNavItem } from "@/lib/definitions";

export const mainNavItems: MainNavItem[] = [
  {
    title: "Visi dan Misi",
    href: "/profil/visi-misi",
  },
  {
    title: "Sejarah",
    href: "/profil/sejarah",
  },
  {
    title: "Pimpinan",
    href: "/profil/pimpinan",
  },
  {
    title: "Imam dan Muadzin",
    href: "/profil/imam-muadzin",
  },
  {
    title: "aktivitas",
    href: "/post/kegiatan",
  },
  {
    title: "Pengumuman",
    href: "/post/pengumuman",
  },
  {
    title: "Artikel",
    href: "/post/artikel",
  },
];

export const sidebarNavItems: SidebarNavItem[] = [
  {
    title: "Beranda",
    items: [{ title: "Dashboard", href: "/dashboard", icon: "dashboard" }],
  },
  {
    title: "Keuangan Infaq Masjid",
    items: [
      {
        title: "Pemasukan",
        href: "/dashboard/keuangan/pemasukan",
      },
      {
        title: "Pengeluaran",
        href: "/dashboard/keuangan/pengeluaran",
      },
    ],
  },
  {
    title: "Data Masjid",
    items: [
      {
        title: "Inventaris",
        href: "/dashboard/inventaris",
        icon: "folder",
      },
      {
        title: "Jamaah",
        href: "/dashboard/jamaah",
        icon: "users",
      },
      {
        title: "Pengurus Masjid",
        href: "/dashboard/pengurus",
        icon: "userCheck",
      },
      {
        title: "Post",
        href: "/dashboard/post",
        icon: "newspaper",
      },
    ],
  },
  {
    title: "Pengaturan",
    items: [
      {
        title: "Akun Pengurus",
        href: "/dashboard/akun",
        icon: "user",
      },
      {
        title: "Pengaturan",
        href: "/dashboard/pengaturan",
        icon: "settings",
      },
    ],
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
