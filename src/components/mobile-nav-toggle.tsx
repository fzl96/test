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
      <DropdownMenuContent className="mr-5 w-[150px]">
        <DropdownMenuItem>
          <Link href="/profil">Profil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/#jadwal-sholat">Jadwal Sholat</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/post/kegiatan">Kegiatan</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/post/pengumuman">Pengumuman</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/post/artikel">Artikel</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {!loggedIn ? (
            <Link href="/login">Login</Link>
          ) : (
            <Link href="/dashboard">Dashboard</Link>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
