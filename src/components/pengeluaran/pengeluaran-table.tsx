import { fetchFilteredPengeluaran } from "@/lib/data";
import { formatDate, formatCurrency } from "@/lib/utils";
import { EditButton } from "@/components/pengeluaran/edit-pengeluaran";
import DeleteButton from "@/components/pengeluaran/delete-pengeluaran";
import { Keterangan, KeteranganMobile } from "@/components/keterangan";

export async function PengeluaranTable({
  currentPage,
}: {
  currentPage: number;
}) {
  const pengeluaran = await fetchFilteredPengeluaran(currentPage);

  return (
    <div className="px-5 inline-block min-w-full align-middle">
      <div className="rounded-lg bg-[#f6f8fa] p-2 md:pt-0 shadow-sm">
        <div className="md:hidden">
          {pengeluaran?.map((keluar) => (
            <div
              key={keluar.id}
              className="mb-2 w-full rounded-md bg-white p-4"
            >
              {keluar.keterangan && (
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="text-sm text-gray-500">
                    <KeteranganMobile ket={keluar.keterangan} />
                  </div>
                </div>
              )}
              <div className="flex w-full items-center justify-between pt-4">
                <div>
                  <p className="text-lg font-medium">
                    {formatCurrency(keluar.jumlah)}
                  </p>
                  <p className="text-base">{formatDate(keluar.createdAt)}</p>
                </div>
                <div className="flex justify-end gap-2">
                  <EditButton
                    id={keluar.id}
                    jumlah={keluar.jumlah}
                    keterangan={keluar.keterangan ? keluar.keterangan : ""}
                  />
                  <DeleteButton id={keluar.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <table className="hidden min-w-full text-gray-900 md:table">
          <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-3 py-5 font-medium">
                Tanggal
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Jumlah
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Keterangan
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {pengeluaran?.map((keluar) => (
              <tr
                key={keluar.id}
                className="w-full hover:bg-[#f9f9fa] border-b py-5 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap px-3 py-3">
                  {formatDate(keluar.createdAt)}
                </td>
                <td className="whitespace-nowrap w-10 px-3 py-3">
                  {formatCurrency(keluar.jumlah)}
                </td>
                <td className=" px-3 py-3">
                  <div className="w-[200px]">
                    <Keterangan ket={keluar.keterangan || ""} />
                  </div>
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <EditButton
                      id={keluar.id}
                      jumlah={keluar.jumlah}
                      keterangan={keluar.keterangan ? keluar.keterangan : ""}
                    />
                    <DeleteButton id={keluar.id} />
                  </div>
                </td>
              </tr>
            ))}
            {!pengeluaran.length && (
              <tr>
                <td className="text-gray-500 text-center py-5" colSpan={4}>
                  Tidak ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
