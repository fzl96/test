"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { sideNavItems } from "@/config/dashboard";
import { SideNavItem } from "@/lib/definitions";
import { Icons } from "@/components/icons";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function SideNav() {
  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed border-zinc-200 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 boder-b border-zinc-200 h-12 w-full"
        >
          {/* <span className="h-7 w-7 bg-zinc-300 rounded-lg" /> */}
          <Image
            src="/logo.png"
            width="40"
            height="40"
            className="rounded-lg"
            alt="Logo"
          />
          <span className="font-bold text-lg hidden md:flex">
            Zaid Bin Tsabit
          </span>
        </Link>

        <div className="flex flex-col space-y-2  md:px-6">
          {sideNavItems.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const Icon = Icons[item.icon || "arrowRight"];

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg w-full justify-between ${
              pathname.includes(item.path)
                ? "bg-primary text-primary-foreground font-semibold"
                : "hover:bg-accent"
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              <Icon width="18" height="18" />
              <span className="flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
              <ChevronDown width="18" height="18" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? "font-bold" : ""
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg  ${
            item.path === pathname
              ? "bg-primary text-primary-foreground font-semibold"
              : item.path === ""
              ? "hover:bg-accent"
              : "hover:bg-accent"
          }`}
        >
          <Icon width="18" height="18" />
          <span className="flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};
