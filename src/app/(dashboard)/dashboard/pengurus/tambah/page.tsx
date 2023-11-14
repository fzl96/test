import { DashboardHeader } from "@/components/dashboard-header";
import { JamaahForm } from "@/components/jamaah/form";
import React from "react";
import { createPengurus } from "@/lib/actions/pengurus-actions";
import { PengurusForm } from "@/components/pengurus/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tambah Pengurus",
  description: "Tambah akun pengurus aplikasi web Masjid Zaid bin Tsabit",
};

export default function Page() {
  return (
    <div className="md:px-5">
      <DashboardHeader
        title="Tambah Jamaah"
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
