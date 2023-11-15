"use client";

import { Keuangan } from "@/lib/definitions";
import { Button } from "./ui/button";
import { createPdf } from "@/lib/actions/pdf";

interface ExportPdfProps {
  data: Keuangan[];
  fileName: string;
}

export function ExportPdf({ data, fileName }: ExportPdfProps) {
  return (
    <>
      <Button onClick={() => createPdf(data, fileName)} variant="default">
        Export
      </Button>
    </>
  );
}
