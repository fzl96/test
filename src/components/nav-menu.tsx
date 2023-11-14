"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Pengumuman",
    href: "/post/pengumuman",
    description: "Pengumuman informasi dari Masjid Zaid bin Tsabit.",
  },
  {
    title: "Kegiatan",
    href: "/post/kegiatan",
    description:
      "Informasi terkait kegiatan-kegiatan yang dilaksanakan di Masjid Zaid bin Tsabit.",
  },
  {
    title: "Artikel",
    href: "/post/artikel",
    description:
      "Artikel atau karya tulis ilmiah yang berhubungan dengan agama Islam.",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
            >
              Beranda
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/profil" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
            >
              Profil
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Aktivitas
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] p-4 md:w-[500px] md:grid-cols-1">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, title, children, ...props }, ref) => {
  return (
    <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent  focus:bg-accent focus:text-accent-foreground">
      <Link
        href={href as string}
        className={cn("", className)}
        legacyBehavior
        passHref
      >
        <NavigationMenuLink>
          <div className="text-sm font-medium hover:text-accent-foreground leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </NavigationMenuLink>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
