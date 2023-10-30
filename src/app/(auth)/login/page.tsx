import { Icons } from "@/components/icons";
import { UserAuthForm } from "@/components/user-auth-form";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] px-10 md:px-0">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-7 w-7" />
        <h1 className="text-2xl font-semibold tracking-tight">
          CV. Family Group
        </h1>
        <p className="text-sm text-muted-foreground">
          Masukkan username untuk masuk ke dalam aplikasi
        </p>
      </div>
      <UserAuthForm />
    </div>
  );
}
