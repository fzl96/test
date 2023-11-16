import { Icons } from "@/components/icons";

export type User = {
  id: string;
  name: string;
  username: string;
  password: string;
};

export type Keuangan = {
  id: string;
  jumlah: number;
  keterangan: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Inventaris = {
  id: string;
  nama: string;
  jumlah: number;
  keterangan: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Pengurus = {
  id: string;
  nama: string;
  jabatan:
    | string
    | "PENASEHAT"
    | "KETUA"
    | "WAKIL_KETUA"
    | "SEKRETARIS"
    | "BIDANG_DANA"
    | "BIDANG_PENDIDIKAN_DAN_DAKWAH"
    | "BIDANG_SARANA_DAN_PRASARANA"
    | "BIDANG_SOSIAL"
    | "BIDANG_KEMITRAAN_DAN_INFOKOM"
    | "BIDANG_KEAMANAN_DAN_KETERTIBAN"
    | "IMAM"
    | "MUADZIN";
  foto: string | null;
  noHp: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type MainNavItem = {
  title: string;
  href: string;
};

export type SidebarNavItem = {
  title: string;
  items: SideNavItem[];
};

export type SideNavItem = {
  title: string;
  href: string;
  icon?: keyof typeof Icons;
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

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  links: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
  thumbnailPlaceholder: string;
};
