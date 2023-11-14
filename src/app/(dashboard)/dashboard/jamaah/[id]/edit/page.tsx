import { DashboardHeader } from "@/components/dashboard-header";
import { JamaahForm } from "@/components/jamaah/form";
import { fetchJamaahById } from "@/lib/data";
import { Suspense } from "react";
import { updateJamaah } from "@/lib/actions/jamaah-actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Jamaah",
  description: "Edit data jamaah Masjid Zaid bin Tsabit",
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const jamaah = await fetchJamaahById(id);

  return (
    <div className="md:px-5">
      <DashboardHeader
        title="Edit Jamaah"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Jamaah", href: "/dashboard/jamaah" },
          { label: "Edit", href: `/dashboard/jamaah/${id}/edit` },
        ]}
      />
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-ignore */}
        <JamaahForm updateFn={updateJamaah} jamaah={jamaah} />
      </Suspense>
    </div>
  );
}
