import { cn } from "@/lib/utils";
import Link from "next/link";

interface BreadrumbProps {
  label: string;
  href: string;
  active?: boolean;
}

export function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: BreadrumbProps[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={cn("flex text-base md:text-lg ")}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={cn(
              breadcrumb.active ? "text-gray-900" : "text-gray-500"
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
