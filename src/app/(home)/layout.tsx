import { Navbar } from "@/components/navbar";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Masjid Zaid bin Tsabit",
    default: "Masjid Zaid bin Tsabit",
  },
  description:
    "Masjid Zaid bin Tsabit merupakan sebuah masjid yang ada di Kota Pekanbaru yang berlokasi di Jalan Delima",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
