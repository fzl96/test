import { DashboardHeader } from "@/components/dashboard-header";
import { JamaahForm } from "@/components/jamaah/form";
import React from "react";
import { createJamaah } from "@/lib/actions/jamaah-actions";

export default function Page() {
  return (
    <>
      <DashboardHeader
        title="Tambah Jamaah"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Jamaah", href: "/dashboard/jamaah" },
          { label: "Tambah", href: "/dashboard/jamaah/tambah" },
        ]}
      />
      <JamaahForm createFn={createJamaah} />
    </>
  );
}
