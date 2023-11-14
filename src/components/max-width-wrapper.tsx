import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-5 md:px-20", className)}
    >
      {children}
    </div>
  );
}
