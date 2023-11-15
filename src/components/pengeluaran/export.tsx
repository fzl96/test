import { fetchPengeluaran } from "@/lib/data";
import { ExportPdf } from "@/components/export-button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { YearSelect } from "../year-select";
import { Label } from "../ui/label";
import { MonthSelect } from "../month-selec";
import { Suspense } from "react";
import { Icons } from "../icons";

interface ExportPengeluaranProps {
  month: number;
  year: number;
}

export async function ExportPengeluaran({
  month,
  year,
}: ExportPengeluaranProps) {
  const pengeluaran = await fetchPengeluaran(month, year);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Export</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Export Pengeluaran</DialogTitle>
        </DialogHeader>
        <Label>Tahun</Label>
        <YearSelect />
        <Label>Bulan</Label>
        <MonthSelect />
        <DialogFooter>
          <Suspense
            fallback={
              <Icons.spinner className="animate-spin h-5 w-5 text-white" />
            }
          >
            <ExportPdf data={pengeluaran} fileName="Pengeluaran" />
          </Suspense>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
