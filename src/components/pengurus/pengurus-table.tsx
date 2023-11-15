import { fetchFilteredPengurus } from "@/lib/data";
import { cn, formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { DeleteButton } from "@/components/post-delete-button";
import { Pencil } from "lucide-react";
import { deletePengurus } from "@/lib/actions/pengurus-actions";

export async function PengurusTable({
  currentPage,
  query,
}: {
  currentPage: number;
  query: string;
}) {
  const pengurus = await fetchFilteredPengurus(currentPage, query);

  return (
    <div className="px-5 inline-block min-w-full align-middle">
      <div className="rounded-lg bg-[#f6f8fa] p-2 md:pt-0 shadow-sm">
        <div className="md:hidden">
          {pengurus?.map((pgrs) => (
            <div key={pgrs.id} className="mb-2 w-full rounded-md bg-white p-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="text-lg text-gray-500">
                  <p className="text-gray-800">{pgrs.nama}</p>
                  <p className="text-sm">{pgrs.noHp}</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <div>
                  <p className="text-sm">{pgrs.jabatan}</p>
                </div>
                <div className="flex justify-end gap-2">
                  <Link
                    href={`/dashboard/pengurus/${pgrs.id}/edit`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "px-2"
                    )}
                  >
                    <Pencil className="h-4 w-4" />
                  </Link>
                  <DeleteButton
                    id={pgrs.id}
                    url={pgrs.foto}
                    page="jamaah"
                    deleteFn={deletePengurus}
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
                Nama
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                No. Hp
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Status
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {pengurus?.map((pgrs) => (
              <tr
                key={pgrs.id}
                className="w-full hover:bg-[#f9f9fa] border-b py-5 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap px-3 py-3">{pgrs.nama}</td>
                <td className="whitespace-nowrap px-3 py-3">{pgrs.noHp}</td>
                <td className="whitespace-nowrap px-3 py-3">{pgrs.jabatan}</td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <Link
                      href={`/dashboard/pengurus/${pgrs.id}/edit`}
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "px-2"
                      )}
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>
                    <DeleteButton
                      id={pgrs.id}
                      url={pgrs.foto}
                      page="jamaah"
                      deleteFn={deletePengurus}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {!pengurus.length && (
              <tr>
                <td className="text-gray-500 text-center py-5" colSpan={6}>
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
