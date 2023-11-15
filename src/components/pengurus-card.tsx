import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pengurus } from "@/lib/definitions";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface PengurusCardProps {
  pengurus: Pengurus;
}

export function PengurusCard({ pengurus }: PengurusCardProps) {
  return (
    // <div className="rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex flex-col items-center gap-14">
    <div className="flex flex-col items-center gap-10 border rounded-xl lg:rounded-2xl p-10 ring-gray-900/10 ring-1 bg-gray-900/5 ring-inset">
      <div className="aspect-square relative h-[200px] w-[200px] rounded-full  bg-white shadow-2xl ring-4 ring-white">
        {pengurus.foto ? (
          <Image
            src={pengurus.foto}
            alt={pengurus.nama}
            // width={200}
            // height={200}
            fill
            sizes="200"
            objectFit="cover"
            className="rounded-full my-0"
          />
        ) : (
          <Image
            src="/masjid/pengurus-placeholder.jpg"
            alt={pengurus.nama}
            fill
            sizes="100"
            objectFit="cover"
            className="rounded-full my-0"
          />
        )}
      </div>
      <h1 className="font-semibold text-center text-3xl">{pengurus.nama}</h1>
      <Badge className="text-base">{pengurus.jabatan}</Badge>
    </div>
    // </div>
  );
}
