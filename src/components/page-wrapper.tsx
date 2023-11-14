export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col pt-2 space-y-2 flex-grow pb-4">
      {children}
    </div>
  );
}
