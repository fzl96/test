"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Keterangan({ ket }: { ket: string }) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className={cn("md:w-[500px] w-[200px]", expanded ? "" : "flex")}>
      <p className={cn("", !expanded ? "truncate" : "whitespace-normal")}>
        {ket}
      </p>
      {ket.length > 50 && (
        <span>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-left w-[150px] text-blue-500"
          >
            {expanded ? "Sembunyikan" : "Lihat Selengkapnya"}
          </button>
        </span>
      )}
    </div>
  );
}

export function KeteranganMobile({ ket }: { ket: string }) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className={cn("w-[200px]")}>
      <p className={cn("", !expanded ? "truncate" : "whitespace-normal")}>
        {ket}
      </p>
      {ket.length > 20 && (
        <span>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-left w-[150px] text-blue-500"
          >
            {expanded ? "Sembunyikan" : "Lihat Selengkapnya"}
          </button>
        </span>
      )}
    </div>
  );
}
