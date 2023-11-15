"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileNavToggle({ loggedIn }: { loggedIn?: boolean }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger>
        <Menu className="w-6 h-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-5 w-[200px]">
        <Link href="/profil/sejarah">
          <DropdownMenuItem>Sejarah</DropdownMenuItem>
        </Link>
        <Link href="/profil/visi-misi">
          <DropdownMenuItem>Visi dan Misi</DropdownMenuItem>
        </Link>
        <Link href="/profil/pimpinan">
          <DropdownMenuItem>Pimpinan</DropdownMenuItem>
        </Link>
        <Link href="/profil/imam-muadzin">
          <DropdownMenuItem>Imam dan Muadzin</DropdownMenuItem>
        </Link>
        <Link href="/#jadwal-sholat">
          <DropdownMenuItem>Jadwal Sholat</DropdownMenuItem>
        </Link>
        <Link href="/post/kegiatan">
          <DropdownMenuItem>Kegiatan</DropdownMenuItem>
        </Link>
        <Link href="/post/pengumuman">
          <DropdownMenuItem>Pengumuman</DropdownMenuItem>
        </Link>
        <Link href="/post/artikel">
          <DropdownMenuItem>Artikel</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        {!loggedIn ? (
          <Link href="/login">
            <DropdownMenuItem>Login</DropdownMenuItem>
          </Link>
        ) : (
          <DropdownMenuItem>
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
