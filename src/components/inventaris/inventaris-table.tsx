import { fetchFilteredInventaris } from "@/lib/data";
import { formatDate, formatCurrency } from "@/lib/utils";
import { EditButton } from "@/components/inventaris/edit-inventaris";
import { DeleteButton } from "@/components/delete-button";
import { Keterangan, KeteranganMobile } from "@/components/keterangan";
import { deleteInventaris } from "@/lib/actions/inventaris-actions";

export async function InventarisTable({
  currentPage,
  query,
}: {
  currentPage: number;
  query: string;
}) {
  const inventaris = await fetchFilteredInventaris(currentPage, query);

  return (
    <div className="px-5 inline-block min-w-full align-middle">
      <div className="rounded-lg bg-[#f6f8fa] p-2 md:pt-0 shadow-sm">
        <div className="md:hidden">
          {inventaris?.map((barang) => (
            <div
              key={barang.id}
              className="mb-2 w-full rounded-md bg-white p-4"
            >
              <div className="flex items-center justify-between border-b pb-4">
                <div className="text-lg text-gray-500">
                  <p>{barang.nama}</p>
                  <p className="text-lg font-medium">Jumlah: {barang.jumlah}</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <div>
                  <p className="text-base">{formatDate(barang.updatedAt)}</p>
                </div>
                <div className="flex justify-end gap-2">
                  <EditButton
                    id={barang.id}
                    nama={barang.nama}
                    jumlah={barang.jumlah}
                    keterangan={barang.keterangan ? barang.keterangan : ""}
                  />
                  <DeleteButton
                    id={barang.id}
                    deleteFn={deleteInventaris}
                    page="Inventaris"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <table className="hidden min-w-full text-gray-900 md:table">
          <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-3 py-5 font-medium">
                Barang
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
            {inventaris?.map((barang) => (
              <tr
                key={barang.id}
                className="w-full hover:bg-[#f9f9fa] border-b py-5 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap px-3 py-3">{barang.nama}</td>
                <td className="whitespace-nowrap w-10 px-3 py-3">
                  {barang.jumlah}
                </td>
                <td className=" px-3 py-3">
                  <div className="w-[200px]">
                    <Keterangan ket={barang.keterangan || ""} />
                  </div>
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <EditButton
                      id={barang.id}
                      jumlah={barang.jumlah}
                      nama={barang.nama}
                      keterangan={barang.keterangan ? barang.keterangan : ""}
                    />
                    <DeleteButton
                      id={barang.id}
                      page="Inventaris"
                      deleteFn={deleteInventaris}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {!inventaris.length && (
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
