import { DashboardHeader } from "@/components/dashboard-header";
import { AkunForm } from "@/components/akun/form";
import { fetchAkunById } from "@/lib/data";
import { Suspense } from "react";
import { Metadata } from "next";
import { updateAkun } from "@/lib/actions/akun-actions";

export const metadata: Metadata = {
  title: "Edit Akun",
  description: "Edit akun pengurus aplikasi web Masjid Zaid bin Tsabit",
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const akun = await fetchAkunById(id);
  console.log(akun);

  return (
    <div className="">
      <DashboardHeader
        title="Edit Akun Pengurus"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Akun", href: "/dashboard/akun" },
          { label: "Edit", href: `/dashboard/akun/${id}/edit` },
        ]}
      />
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-ignore */}
        <AkunForm updateFn={updateAkun} akun={akun} />
      </Suspense>
    </div>
  );
}
