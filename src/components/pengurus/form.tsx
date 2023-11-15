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
import { Progress } from "@/components/ui/progress";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { pengurusSchema } from "@/lib/validations/form";
import { z } from "zod";
import { useEdgeStore } from "@/lib/edgestore";
import { useState } from "react";
import { Label } from "../ui/label";
import { SingleImageDropzone } from "../single-image-dropzone";

type FormData = z.infer<typeof pengurusSchema>;

const options: { value: string; label: string }[] = [
  { value: "IMAM", label: "Imam" },
  { value: "MUADZIN", label: "Muadzin" },
];

interface PengurusExtended extends FormData {
  id: string;
}

export function PengurusForm({
  pengurus,
  createFn,
  updateFn,
}: {
  pengurus?: PengurusExtended;
  createFn?: (data: FormData) => Promise<any>;
  updateFn?: (id: string, data: FormData) => Promise<any>;
}) {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(pengurusSchema),
    defaultValues: {
      nama: pengurus?.nama || "",
      jabatan: pengurus?.jabatan || "IMAM",
      foto: pengurus?.foto || "",
      noHp: pengurus?.noHp || "",
    },
  });
  const { edgestore } = useEdgeStore();
  const [file, setFile] = useState<File>();
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  async function onSubmit(data: FormData) {
    if (file && progress < 100) {
      toast({
        title: "Mohon tunggu",
        description: "Foto sedang diunggah",
      });
      return;
    }
    let res;
    if (updateFn && pengurus) {
      res = await updateFn(pengurus.id, data);

      if (data.foto !== pengurus.foto) {
        if (pengurus.foto) {
          await edgestore.publicFiles.delete({
            url: pengurus.foto,
          });
        }
      }
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

    if (data.foto) {
      await edgestore.publicFiles.confirmUpload({
        url: data.foto || "",
      });
    }

    router.push("/dashboard/pengurus");
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
            <Label htmlFor="foto">Foto</Label>
            <SingleImageDropzone
              width={200}
              value={file || form.watch("foto")}
              dropzoneOptions={{
                maxSize: 1024 * 1024 * 5,
              }}
              onChange={(file) => setFile(file)}
              onFileRemoved={() => form.setValue("foto", "")}
              onFileAdded={async (file) => {
                try {
                  const res = await edgestore.publicFiles.upload({
                    file,
                    options: {
                      temporary: true,
                    },
                    input: { type: "profile" },
                    onProgressChange: (progress) => {
                      setProgress(progress);
                    },
                  });
                  form.setValue("foto", res.url);
                } catch (error) {
                  console.log(error);
                }
              }}
            />
            <div className={cn("flex items-center gap-2", !file && "hidden")}>
              <Progress value={progress} className="w-[180px]" />
              {progress}%
            </div>
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="required-field">Nama</FormLabel>
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
              name="jabatan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="required-field">Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Status" />
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
              name="noHp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">No. HP</FormLabel>
                  <Input id="noHp" placeholder="Masukkan No Hp" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-2 mt-5">
            <Link
              href="/dashboard/pengurus"
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
              disabled={
                form.formState.isSubmitting ||
                (!form.formState.isDirty &&
                  form.watch("foto") === pengurus?.foto)
              }
              className={cn({
                "cursor-not-allowed opacity-60":
                  form.formState.isSubmitting ||
                  (!form.formState.isDirty &&
                    form.watch("foto") === pengurus?.foto),
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
