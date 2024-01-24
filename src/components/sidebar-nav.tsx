"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SideNavItem, SidebarNavItem } from "@/lib/definitions";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
  user: any;
}

export function SidebarNav({ items, user }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-7")}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-base font-medium">
            {item.title}
          </h4>
          {item.items ? (
            <SidebarNavItems
              items={item.items}
              pathname={pathname}
              user={user}
            />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}

interface SidebarNavItemsProps {
  items: SideNavItem[];
  pathname: string | null;
  user: any;
}

export function SidebarNavItems({
  items,
  pathname,
  user,
}: SidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid gap-1 grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) => {
        if (
          user.role !== "ADMIN" &&
          (item.href === "/dashboard/akun" ||
            item.href === "/dashboard/pengurus")
        )
          return null;
        const Icon = Icons[item.icon || "arrowRight"];
        return item.href ? (
          <Link
            key={index}
            href={item.href}
            className={cn("flex w-full items-center rounded-md p-2 gap-3", {
              "hover:bg-accent": pathname !== item.href,
              "bg-primary text-primary-foreground": pathname === item.href,
            })}
            // target={item.external ? "_blank" : ""}
            // rel={item.external ? "noreferrer" : ""}
          >
            <span className="">
              <Icon width={16} height={16} />
            </span>
            {item.title}
          </Link>
        ) : (
          <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">
            {item.title}
          </span>
        );
      })}
    </div>
  ) : null;
}
