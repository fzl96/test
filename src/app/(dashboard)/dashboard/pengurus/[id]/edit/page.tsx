import { DashboardHeader } from "@/components/dashboard-header";
import { PengurusForm } from "@/components/pengurus/form";
import { fetchPengurusById } from "@/lib/data";
import { Suspense } from "react";
import { updatePengurus } from "@/lib/actions/pengurus-actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Pengurus",
  description: "Edit akun pengurus aplikasi web Masjid Zaid bin Tsabit",
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const pengurus = await fetchPengurusById(id);

  return (
    <div className="md:px-5">
      <DashboardHeader
        title="Edit Akun Pengurus"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Pengurus", href: "/dashboard/pengurus" },
          { label: "Edit", href: `/dashboard/pengurus/${id}/edit` },
        ]}
      />
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-ignore */}
        <PengurusForm updateFn={updatePengurus} pengurus={pengurus} />
      </Suspense>
    </div>
  );
}
