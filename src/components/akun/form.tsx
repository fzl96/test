"use client";

import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icons } from "@/components/icons";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { akunSchema } from "@/lib/validations/form";
import { z } from "zod";

type FormData = z.infer<typeof akunSchema>;

const options: { value: string; label: string }[] = [
  { value: "ADMIN", label: "Admin" },
  { value: "PENGURUS", label: "Pengurus" },
];

interface AkunExtended extends FormData {
  id: string;
}

export function AkunForm({
  akun,
  createFn,
  updateFn,
}: {
  akun?: AkunExtended;
  createFn?: (data: FormData) => Promise<any>;
  updateFn?: (id: string, data: FormData) => Promise<any>;
}) {
  console.log(akun);
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(akunSchema),
    defaultValues: {
      nama: akun?.nama,
      username: akun?.username,
      password: "",
      confirmPassword: "",
      role: akun?.role,
    },
  });
  const { toast } = useToast();

  async function onSubmit(data: FormData) {
    let res;
    if (updateFn && akun) {
      res = await updateFn(akun.id, data);
    } else if (createFn) {
      res = await createFn(data);
    } else return;

    if (res?.error) {
      toast({
        title: "Terjadi Kesalahan",
        description: res.error,
        variant: "destructive",
      });
      return;
    }

    router.push("/dashboard/akun");
    toast({
      title: "Berhasil",
    });
  }

  return (
    <div className="px-5">
      <Form {...form}>
        <form
          className="p-5 border rounded-lg"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <Input
                    id="nama"
                    placeholder="Masukkan nama"
                    {...field}
                    autoFocus
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <Input
                    id="username"
                    placeholder="Masukkan username"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input
                    id="password"
                    placeholder="Masukkan password"
                    type="password"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Konfirmasi Password</FormLabel>
                  <Input
                    id="confirmPassword"
                    placeholder="Masukkan password"
                    type="password"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-2 mt-5">
            <Link
              href="/dashboard/akun"
              className={cn(
                buttonVariants({
                  variant: "outline",
                })
              )}
            >
              Batal
            </Link>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting || !form.formState.isDirty}
              className={cn({
                "cursor-not-allowed opacity-60":
                  form.formState.isSubmitting || !form.formState.isDirty,
              })}
            >
              {form.formState.isSubmitting && (
                <span>
                  <Icons.spinner className="animate-spin h-4 w-4 mr-2" />
                </span>
              )}
              Simpan
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
