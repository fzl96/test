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
import { jamaahSchema } from "@/lib/validations/form";
import { z } from "zod";

type FormData = z.infer<typeof jamaahSchema>;

const options: { value: string; label: string }[] = [
  { value: "Kepala Keluarga", label: "Kepala Keluarga" },
  { value: "Istri", label: "Istri" },
  { value: "Anak", label: "Anak" },
  { value: "Orang Tua", label: "Orang Tua" },
  { value: "Famili Lain", label: "Famili Lain" },
];

interface JamaahExtended extends FormData {
  id: string;
}

export function JamaahForm({
  jamaah,
  createFn,
  updateFn,
}: {
  jamaah?: JamaahExtended;
  createFn?: (data: FormData) => Promise<any>;
  updateFn?: (id: string, data: FormData) => Promise<any>;
}) {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(jamaahSchema),
    defaultValues: {
      nama: jamaah?.nama || "",
      status: jamaah?.status || undefined,
      pekerjaan: jamaah?.pekerjaan || "",
      penghasilan: jamaah?.penghasilan || 0,
      alamat: jamaah?.alamat || "",
      noHp: jamaah?.noHp || "",
    },
  });
  const { toast } = useToast();

  async function onSubmit(data: FormData) {
    let res;
    if (updateFn && jamaah) {
      res = await updateFn(jamaah.id, data);
    } else if (createFn) {
      res = await createFn(data);
    } else return;

    if (res.error) {
      return toast({
        title: "Terjadi kesalahan",
        description: "Silahkan coba lagi",
        variant: "destructive",
      });
    }

    router.push("/dashboard/jamaah");
    toast({
      title: "Berhasil",
      description: "Jamaah berhasil ditambahkan",
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
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih status" />
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
              name="pekerjaan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pekerjaan</FormLabel>
                  <Input
                    id="pekerjaan"
                    placeholder="Masukkan pekerjaan"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="penghasilan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Penghasilan</FormLabel>
                  <Input
                    id="penghasilan"
                    placeholder="Masukkan penghasilan"
                    type="number"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="alamat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat</FormLabel>
                  <Input id="alamat" placeholder="Masukkan alamat" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="noHp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No. HP</FormLabel>
                  <Input id="noHp" placeholder="Masukkan no. HP" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="justify-end flex gap-2 mt-5">
            <Link
              href="/dashboard/jamaah"
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
