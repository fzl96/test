import { fetchFilteredUsers } from "@/lib/data";
import { cn, formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { DeleteButton } from "@/components/delete-button";
// import { Keterangan, KeteranganMobile } from "@/components/keterangan";
import { Pencil } from "lucide-react";
import { deleteAkun } from "@/lib/actions/akun-actions";

export async function AkunTable({
  currentPage,
  query,
}: {
  currentPage: number;
  query: string;
}) {
  const users = await fetchFilteredUsers(currentPage, query);

  return (
    <div className="px-5 inline-block min-w-full align-middle">
      <div className="rounded-lg bg-[#f6f8fa] p-2 md:pt-0 shadow-sm">
        <div className="md:hidden">
          {users?.map((user) => (
            <div key={user.id} className="mb-2 w-full rounded-md bg-white p-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="text-lg text-gray-500">
                  <p className="text-gray-800">{user.name}</p>
                  <p className="text-sm">{user.username}</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <div>
                  <p className="text-sm">{user.role}</p>
                </div>
                <div className="flex justify-end gap-2">
                  <Link
                    href={`/dashboard/akun/${user.id}/edit`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "px-2"
                    )}
                  >
                    <Pencil className="h-4 w-4" />
                  </Link>
                  <DeleteButton
                    id={user.id}
                    page="jamaah"
                    deleteFn={deleteAkun}
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
                Username
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Role
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users?.map((user) => (
              <tr
                key={user.id}
                className="w-full hover:bg-[#f9f9fa] border-b py-5 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap px-3 py-3">{user.name}</td>
                <td className="whitespace-nowrap px-3 py-3">{user.username}</td>
                <td className="whitespace-nowrap px-3 py-3">{user.role}</td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <Link
                      href={`/dashboard/akun/${user.id}/edit`}
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "px-2"
                      )}
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>
                    <DeleteButton
                      id={user.id}
                      page="jamaah"
                      deleteFn={deleteAkun}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {!users.length && (
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
