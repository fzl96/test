"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { months } from "@/config/dashboard";

export function MonthSelect({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentMonth = Number(
    searchParams.get("month") || new Date().getMonth() + 1
  );

  return (
    <Select
      onValueChange={(month) => {
        const params = new URLSearchParams(searchParams);
        params.set("month", String(month));
        replace(`${pathname}?${params.toString()}`);
      }}
      defaultValue={currentMonth.toString()}
    >
      <SelectTrigger className={className}>
        <SelectValue>
          {months.find((month) => currentMonth === month.value)?.label}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {months.map((month) => (
            <SelectItem value={month.value.toString()} key={month.value}>
              {month.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
