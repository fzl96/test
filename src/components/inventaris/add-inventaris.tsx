"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, ButtonProps } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { inventarisSchema } from "@/lib/validations/form";
import { createInventaris } from "@/lib/actions/inventaris-actions";

interface PemasukanAddButtonProps extends ButtonProps {}

type FormData = z.infer<typeof inventarisSchema>;

export function AddButton({
  className,
  variant,
  ...props
}: PemasukanAddButtonProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(inventarisSchema),
    defaultValues: {
      jumlah: 0,
    },
  });

  async function onSubmit(data: FormData) {
    const res = await createInventaris(data);
    if (res.error) {
      return toast({
        title: "Terjadi kesalahan",
        description: "Silahkan coba lagi",
        variant: "destructive",
      });
    }

    setIsDialogOpen(false);
    reset();
    toast({
      title: "Berhasil",
      description: "Inventaris berhasil ditambahkan",
    });
    router.refresh();
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className={cn()} {...props}>
          Tambah
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Inventaris</DialogTitle>
          <DialogDescription>
            Silahkan isi form berikut untuk menambah inventaris baru
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid py-2">
            <div className="space-y-1 items-center gap-4">
              <Label htmlFor="nama" className="text-right required-field">
                Nama
              </Label>
              <Input
                id="nama"
                placeholder="Masukkan nama barang"
                className="col-span-3"
                {...register("nama")}
              />
              <p>
                {errors.nama?.message && (
                  <span className="text-red-500">{errors.nama?.message}</span>
                )}
              </p>
            </div>
            <div className="space-y-1 items-center gap-4">
              <Label htmlFor="jumlah" className="text-right required-field">
                Jumlah
              </Label>
              <Input
                id="jumlah"
                placeholder="Masukkan jumlah"
                className="col-span-3"
                {...register("jumlah", {
                  valueAsNumber: true,
                })}
              />
              <p>
                {errors.jumlah?.message && (
                  <span className="text-red-500 text-sm">
                    {errors.jumlah?.message}
                  </span>
                )}
              </p>
            </div>
            <div className="space-y-1 items-center gap-4">
              <Label htmlFor="keterangan" className="text-right">
                Keterangan
              </Label>
              <Input
                id="keterangan"
                placeholder="Masukkan keterangan"
                className="col-span-3"
                {...register("keterangan")}
              />
              <p>
                {errors.keterangan?.message && (
                  <span className="text-red-500">
                    {errors.keterangan?.message}
                  </span>
                )}
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              disabled={isSubmitting || !isDirty}
              className={cn({
                "cursor-not-allowed opacity-60": isSubmitting || !isDirty,
              })}
            >
              {isSubmitting && (
                <span>
                  <Icons.spinner className="animate-spin h-4 w-4 mr-2" />
                </span>
              )}
              Simpan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
