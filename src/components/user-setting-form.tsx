"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { userSettingFormSchema } from "@/lib/validations/form";

import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { logout, updateUser } from "@/lib/actions/user-setting-actions";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

type FormData = z.infer<typeof userSettingFormSchema>;

interface UserSettingFormProps extends React.HTMLAttributes<HTMLFormElement> {
  user: {
    id: string;
    name: string;
    username: string;
  };
}

export function UserSettingForm({
  className,
  user,
  ...props
}: UserSettingFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      nama: user.name,
      username: user.username,
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(userSettingFormSchema),
  });
  const { toast } = useToast();

  async function onSubmit(data: FormData) {
    console.log(data);
    const res = await updateUser(user.id, data);
    if (res?.error)
      return toast({
        title: "Terjadi kesalahan",
        description: res.error,
        variant: "destructive",
      });

    reset({
      newPassword: "",
      confirmPassword: "",
    });
    toast({
      title: "Berhasil",
      description: "Berhasil mengupdate data",
    });
    router.refresh();
  }

  return (
    <form
      className={cn(className)}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card>
        <CardHeader>
          <CardTitle>Update Pengguna</CardTitle>
          <CardDescription>Update informasi akun pengguna</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="gird space-y-2 gap-1">
            <Label htmlFor="nama">Nama</Label>
            <Input
              id="nama"
              className="md:w-[400px]"
              size={32}
              placeholder="Masukkan nama"
              {...register("nama")}
            />
            {errors?.nama && (
              <p className="px-1 text-xs text-red-600">{errors.nama.message}</p>
            )}
          </div>
          <div className="gird space-y-2 gap-1">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              className="md:w-[400px]"
              size={32}
              placeholder="Masukkan username"
              {...register("username")}
            />
            {errors?.username && (
              <p className="px-1 text-xs text-red-600">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="gird space-y-2 gap-1">
            <Label htmlFor="newPassword">Password Baru</Label>
            <Input
              id="newPassword"
              className="md:w-[400px]"
              size={32}
              placeholder="Masukkan password baru"
              type="password"
              {...register("newPassword")}
            />
            {errors?.newPassword && (
              <p className="px-1 text-xs text-red-600">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <div className="gird space-y-2 gap-1">
            <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
            <Input
              id="confirmPassword"
              className="md:w-[400px]"
              size={32}
              placeholder="Masukkan konfirmasi password"
              type="password"
              {...register("confirmPassword")}
            />
            {errors?.confirmPassword && (
              <p className="px-1 text-xs text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button
            type="button"
            variant="destructive"
            onClick={async () => {
              await logout();
            }}
          >
            Keluar
          </Button>
          <Button type="submit" disabled={isSubmitting || !isDirty}>
            {isSubmitting && (
              <span>
                <Icons.spinner className="animate-spin h-4 w-4 mr-2" />
              </span>
            )}
            Simpan
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
