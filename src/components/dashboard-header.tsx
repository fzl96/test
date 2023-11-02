import Link from "next/link";
import { Breadcrumbs } from "./breadcrumbs";

type Breadcrumb = {
  label: string;
  href: string;
  active?: boolean;
};

export function DashboardHeader({
  title,
  description,
  breadcrumbs,
  children,
}: {
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  children?: React.ReactNode;
}) {
  return (
    <div className="p-5">
      {breadcrumbs?.length && <Breadcrumbs breadcrumbs={breadcrumbs || []} />}
      <div className="flex justify-between gap-5 items-center">
        <div className="grid gap-1">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
