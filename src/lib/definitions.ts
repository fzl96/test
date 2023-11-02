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
