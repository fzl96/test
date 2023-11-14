import { DashboardHeader } from "@/components/dashboard-header";
import { UserSettingForm } from "@/components/user-setting-form";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { fetchUserData } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pengaturan",
  description: "Pengaturan akun aplikasi web Masjid Zaid bin Tsabit",
};

export default async function Page() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  /* @ts-ignore */
  const user = await fetchUserData(session.user.id);

  return (
    <div className="md:px-5">
      <DashboardHeader title="Pengaturan" />
      {/* @ts-ignore */}
      <UserSettingForm user={user} className="px-5" />
    </div>
  );
}
