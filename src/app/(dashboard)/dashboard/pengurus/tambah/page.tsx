import { DashboardHeader } from "@/components/dashboard-header";
import { JamaahForm } from "@/components/jamaah/form";
import React from "react";
import { createPengurus } from "@/lib/actions/pengurus-actions";
import { PengurusForm } from "@/components/pengurus/form";

export default function Page() {
  return (
    <>
      <DashboardHeader
        title="Tambah Jamaah"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Pengurus", href: "/dashboard/pengurus" },
          { label: "Tambah", href: "/dashboard/pengurus/tambah" },
        ]}
      />
      <PengurusForm createFn={createPengurus} />
    </>
  );
}
