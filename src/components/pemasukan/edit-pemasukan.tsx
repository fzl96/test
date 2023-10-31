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
import { Button, ButtonProps, buttonVariants } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { pemasukanCreateSchema } from "@/lib/validations/pemasukan";
import { updatePemasukan } from "@/lib/actions";
import { revalidatePath } from "next/cache";

interface PemasukanAddButtonProps extends ButtonProps {
  id: string;
  jumlah: number;
  keterangan?: string;
}

type FormData = z.infer<typeof pemasukanCreateSchema>;

export function EditButton({
  className,
  variant,
  id,
  jumlah,
  keterangan,
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
    resolver: zodResolver(pemasukanCreateSchema),
    defaultValues: {
      jumlah: jumlah,
      keterangan: keterangan,
    },
  });

  async function onSubmit(data: FormData) {
    const res = await updatePemasukan(id, data);
    if (res.error) {
      return toast({
        title: "Terjadi kesalahan",
        description: "Silahkan coba lagi",
        variant: "destructive",
      });
    }

    setIsDialogOpen(false);
    reset({
      jumlah: 0,
      keterangan: "",
    });
    toast({
      title: "Berhasil",
      description: "Pemasukan berhasil diubah",
    });
    router.refresh();
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className={cn("px-2")} {...props} variant="outline">
          <Icons.pen className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Pemasukan</DialogTitle>
          <DialogDescription>
            Silahkan isi form berikut untuk mengubah pemasukan
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid py-2">
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
                placeholder="Masukkan keterangan (opsional)"
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
