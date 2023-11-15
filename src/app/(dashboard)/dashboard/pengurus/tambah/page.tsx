import { DashboardHeader } from "@/components/dashboard-header";
import React from "react";
import { PengurusForm } from "@/components/pengurus/form";
import { Metadata } from "next";
import { createPengurus } from "@/lib/actions/pengurus-actions";

export const metadata: Metadata = {
  title: "Tambah Pengurus",
  description: "Tambah pengurus Masjid Zaid bin Tsabit",
};

export default function Page() {
  return (
    <div className="md:px-5">
      <DashboardHeader
        title="Tambah Pengurus"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Pengurus", href: "/dashboard/pengurus" },
          { label: "Tambah", href: "/dashboard/pengurus/tambah" },
        ]}
      />
      <PengurusForm createFn={createPengurus} />
    </div>
  );
}
