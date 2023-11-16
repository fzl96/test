import { fetchInventaris } from "@/lib/data";
import { ExportInventarisPdf } from "@/components/inventaris/export-button";

export async function ExportInventaris() {
  const inventaris = await fetchInventaris();

  return (
    <>
      <ExportInventarisPdf data={inventaris} />
    </>
  );
}
