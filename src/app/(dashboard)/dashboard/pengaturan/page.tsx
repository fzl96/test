import { DashboardHeader } from "@/components/dashboard-header";
import { UserSettingForm } from "@/components/user-setting-form";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { fetchUserData } from "@/lib/data";

export default async function Page() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  /* @ts-ignore */
  const user = await fetchUserData(session.user.id);

  return (
    <>
      <DashboardHeader title="Pengaturan" />
      {/* @ts-ignore */}
      <UserSettingForm user={user} className="px-5" />
    </>
  );
}
