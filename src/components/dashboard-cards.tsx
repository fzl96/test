import { fetchCardData } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import {
  Card as CardComponent,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpFromLine, ArrowsUpFromLine } from "lucide-react";

export async function DashboardCards({ year }: { year: string | number }) {
  const data = await fetchCardData(Number(year));

  return (
    <div className="px-5">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Pemasukan Bulan Ini"
          content={formatCurrency(data.pemasukanThisMonth._sum.jumlah || 0)}
          icon={<ArrowsUpFromLine className="w-5 h-5 rotate-180" />}
          description="Jumlah pemasukan bulan ini"
        />
        <Card
          title="Pengeluaran Bulan Ini"
          content={formatCurrency(data.pengeluaranThisMonth._sum.jumlah || 0)}
          icon={<ArrowsUpFromLine className="w-5 h-5" />}
          description="Jumlah pengeluaran bulan ini"
        />
        <Card
          title="Pemassukan Hari Ini"
          content={formatCurrency(data.pemasukanToday._sum.jumlah || 0)}
          icon={<ArrowUpFromLine className="w-5 h-5 rotate-180" />}
          description="Jumlah pemasukan hari ini"
        />
        <Card
          title="Pengeluaran Hari Ini"
          content={formatCurrency(data.pengeluaranToday._sum.jumlah || 0)}
          icon={<ArrowUpFromLine className="w-5 h-5" />}
          description="Jumlah pengeluaran hari ini"
        />
      </div>
    </div>
  );
}

export function Card({
  title,
  content,
  description,
  icon,
}: {
  title: string;
  content: string;
  description?: string;
  icon: React.ReactNode;
}) {
  return (
    <CardComponent>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">{content}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </CardComponent>
  );
}
