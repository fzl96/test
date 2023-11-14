import { Icons } from "@/components/icons";

export type User = {
  id: string;
  name: string;
  username: string;
  password: string;
};

export type SideNavItem = {
  title: string;
  path: string;
  icon?: keyof typeof Icons;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type MenuItemWithSubMenuProps = {
  item: SideNavItem;
  toggleOpen: () => void;
};

export type Monthly = {
  month: string | number;
  totalPemasukan: number;
  totalPengeluaran: number;
};

export type Jadwal = {
  status: boolean | number;
  message?: string;
  data?: {
    id: string;
    lokasi: string;
    daerah: string;
    koordinat: {
      lat: string;
      long: string;
      lintang: string;
      bujur: string;
    };
    jadwal: {
      tanggal: string;
      imsak: string;
      subuh: string;
      terbit: string;
      dhuha: string;
      dzuhur: string;
      ashar: string;
      maghrib: string;
      isya: string;
      date: string;
    };
  };
};

export type Post = {
  id: string;
  judul: string;
  konten: string;
  thumbnail: string | null;
  penulisId: string | null;
  slug: string;
  jenis: "ARTIKEL" | "PENGUMUMAN" | "KEGIATAN";
  tanggal: Date;
  createdAt: Date;
  updatedAt: Date;
};
