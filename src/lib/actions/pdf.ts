import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Inventaris, Keuangan } from "@/lib/definitions";
import { formatCurrency } from "@/lib/utils";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { addDays } from "date-fns";

export function createPdf(data: Keuangan[], fileName: string) {
  const doc = new jsPDF();
  doc.addImage("/masjid/kop.png", "PNG", 0, 5, 210, 30);
  autoTable(doc, {
    startY: 40,
    head: [["No", "Tanggal", "Jumlah", "Keterangan"]],
    body: data.map((item, index) => {
      return [
        index + 1,
        format(new Date(item.createdAt), "cccc, dd MMMM yyyy", { locale: id }),
        formatCurrency(item.jumlah),
        item.keterangan || "-",
      ];
    }),
  });

  const total = data.reduce((acc, item) => acc + item.jumlah, 0);

  let finalY = (doc as any).lastAutoTable.finalY;
  const hasSpace = 297 - finalY > 60;
  if (!hasSpace) doc.addPage();
  const startY = hasSpace ? finalY + 20 : 20;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Total: ", 15, startY - 15);
  doc.text(formatCurrency(total), 28, startY - 15);
  doc.text("PENGURUS MASJID ZAID BIN TSABIT", 130, startY);
  doc.text("KETUA", 130, startY + 5);
  doc.setFontSize(11);
  doc.text("Azwar Anas", 130, startY + 30);
  doc.save(`${fileName}.pdf`);
}

export function createInventarisPdf(data: Inventaris[]) {
  const doc = new jsPDF();
  doc.addImage("/masjid/kop.png", "PNG", 0, 5, 210, 30);
  autoTable(doc, {
    startY: 40,
    head: [["No", "Barang", "Jumlah", "Keterangan"]],
    body: data.map((item, index) => {
      return [index + 1, item.nama, item.jumlah, item.keterangan || "-"];
    }),
  });

  let finalY = (doc as any).lastAutoTable.finalY;
  const hasSpace = 297 - finalY > 60;
  if (!hasSpace) doc.addPage();
  const startY = hasSpace ? finalY + 20 : 20;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("PENGURUS MASJID ZAID BIN TSABIT", 130, startY);
  doc.text("KETUA", 130, startY + 5);
  doc.setFontSize(11);
  doc.text("Azwar Anas", 130, startY + 30);
  doc.save(`inventaris.pdf`);
}
