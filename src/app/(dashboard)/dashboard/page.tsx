import { DashboardCards } from "@/components/dashboard-cards";
import { DashboardChart } from "@/components/dashboard-chart";
import { DashboardHeader } from "@/components/dashboard-header";
import { Button } from "@/components/ui/button";
import { YearSelect } from "@/components/year-select";
import React, { Suspense } from "react";

export default function Page({
  searchParams,
}: {
  searchParams: {
    year?: string;
  };
}) {
  const { year } = searchParams;
  const currentYear = Number(year) || new Date().getFullYear();
  return (
    <>
      <div className="flex p-5 gap-4 flex-col">
        <div className="px-5 md:pt-5">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Dashboard
            </h1>
            <YearSelect className="w-[100px]" />
          </div>
        </div>
        <div className="grid gap-2">
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardCards year={currentYear} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardChart year={currentYear} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
