import { Icons } from "@/components/icons";
import { UserAuthForm } from "@/components/user-auth-form";
import Image from "next/image";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="h-screen mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] px-10 md:px-0">
      <div className="flex flex-col space-y-2 text-center items-center">
        <Image src="/logo.png" width={150} height={150} alt="Logo" />
        <h1 className="text-2xl font-semibold tracking-tight">
          Zaid bin Tsabit
        </h1>
        <p className="text-sm text-muted-foreground">
          Masukkan username untuk masuk ke dalam aplikasi
        </p>
      </div>
      <UserAuthForm />
    </div>
  );
}
