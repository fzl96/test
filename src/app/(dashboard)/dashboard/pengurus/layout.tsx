import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  // @ts-ignore
  if (session?.user.role.toLowerCase() !== "admin") redirect("/dashboard");

  return <>{children}</>;
}
