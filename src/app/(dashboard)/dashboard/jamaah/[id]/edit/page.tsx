import { DashboardHeader } from "@/components/dashboard-header";
import { JamaahForm } from "@/components/jamaah/form";
import { fetchJamaahById } from "@/lib/data";
import { Suspense } from "react";
import { updateJamaah } from "@/lib/actions/jamaah-actions";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const jamaah = await fetchJamaahById(id);

  return (
    <>
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
    </>
  );
}
