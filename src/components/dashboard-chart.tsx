import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchChartData } from "@/lib/data";
import { Chart } from "@/components/bar-chart";
import { Monthly } from "@/lib/definitions";

export async function DashboardChart({ year }: { year: string | number }) {
  const data = await fetchChartData(Number(year));

  return (
    <div className="px-5 py-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-normal">Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="hidden md:block">
            <Chart data={data} />
          </div>
          <div className="block md:hidden space-y-2">
            <Chart
              data={data.map((item: Monthly) => {
                return {
                  month: item.month,
                  totalPemasukan: item.totalPemasukan,
                };
              })}
            />
            <Chart
              data={data.map((item: Monthly) => {
                return {
                  month: item.month,
                  totalPengeluaran: item.totalPengeluaran,
                };
              })}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
