"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Icons } from "@/components/icons";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

interface DeleteButtonProps {
  id: string;
  page: string;
  deleteFn: (id: string) => Promise<any>;
}

export function DeleteButton({ id, page, deleteFn }: DeleteButtonProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);

  return (
    <AlertDialog onOpenChange={setShowDeleteAlert} open={showDeleteAlert}>
      <AlertDialogTrigger
        className={cn(buttonVariants({ variant: "outline" }), "px-2")}
      >
        <Icons.trash2 className="h-4 w-4" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hapus {page}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Apakah anda yakin ingin menghapus data ini?
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <button
            className={cn(buttonVariants({ variant: "destructive" }), {
              "opacity-60 cursor-not-allowed": isDeleteLoading,
            })}
            onClick={async () => {
              setIsDeleteLoading(true);

              const res = await deleteFn(id);

              if (res.error) {
                toast({
                  title: "Terjadi kesalahan",
                  description: `${res.error}`,
                  variant: "destructive",
                });
                setIsDeleteLoading(false);
                return;
              }

              router.refresh();

              setIsDeleteLoading(false);
              setShowDeleteAlert(false);
              toast({
                title: "Berhasil",
                description: `${page} berhasil dihapus`,
              });
            }}
          >
            {
              <div className="flex items-center space-x-2">
                {isDeleteLoading ? (
                  <Icons.spinner className="animate-spin h-5 w-5" />
                ) : null}
                <span>Hapus</span>
              </div>
            }
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
