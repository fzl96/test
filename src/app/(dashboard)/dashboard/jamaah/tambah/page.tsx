import { DashboardHeader } from "@/components/dashboard-header";
import { JamaahForm } from "@/components/jamaah/form";
import React from "react";
import { createJamaah } from "@/lib/actions/jamaah-actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tambah Jamaah",
  description: "Tambah data jamaah Masjid Zaid bin Tsabit",
};

export default function Page() {
  return (
    <div className="md:px-5">
      <DashboardHeader
        title="Tambah Jamaah"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Jamaah", href: "/dashboard/jamaah" },
          { label: "Tambah", href: "/dashboard/jamaah/tambah" },
        ]}
      />
      <JamaahForm createFn={createJamaah} />
    </div>
  );
}
