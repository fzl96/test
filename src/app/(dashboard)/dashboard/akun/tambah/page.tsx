import { DashboardHeader } from "@/components/dashboard-header";
import React from "react";
import { AkunForm } from "@/components/akun/form";
import { Metadata } from "next";
import { createAkun } from "@/lib/actions/akun-actions";

export const metadata: Metadata = {
  title: "Tambah Akun",
  description: "Tambah akun pengurus aplikasi web Masjid Zaid bin Tsabit",
};

export default function Page() {
  return (
    <div className="md:px-5">
      <DashboardHeader
        title="Tambah Akun"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Akun", href: "/dashboard/akun" },
          { label: "Tambah", href: "/dashboard/akun/tambah" },
        ]}
      />
      <AkunForm createFn={createAkun} />
    </div>
  );
}
