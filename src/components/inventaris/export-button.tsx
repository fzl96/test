"use client";

import { Inventaris } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { createInventarisPdf } from "@/lib/actions/pdf";

interface ExportPdfProps {
  data: Inventaris[];
}

export function ExportInventarisPdf({ data }: ExportPdfProps) {
  return (
    <>
      <Button onClick={() => createInventarisPdf(data)} variant="outline">
        Export
      </Button>
    </>
  );
}
