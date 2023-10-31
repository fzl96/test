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
];
