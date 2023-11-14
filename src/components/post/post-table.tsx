import { fetchFilteredPost } from "@/lib/data";
import { capitalizeFirstLetter, cn, formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { DeleteButton } from "@/components/delete-button";
import { Keterangan, KeteranganMobile } from "@/components/keterangan";
import { deletePost } from "@/lib/actions/post-actions";
import { Pencil } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Badge } from "../ui/badge";

export async function PostTable({
  currentPage,
  query,
}: {
  currentPage: number;
  query: string;
}) {
  const posts = await fetchFilteredPost(currentPage, query);

  return (
    <div className="px-5 inline-block min-w-full align-middle">
      <div className="rounded-lg bg-[#f6f8fa] p-2 md:pt-0 shadow-sm">
        <div className="md:hidden">
          {posts?.map((post) => (
            <div key={post.id} className="mb-2 w-full rounded-md bg-white p-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="text-lg text-gray-500">
                  <p className="text-gray-800">{post.judul}</p>
                  {/* <p className="text-sm">{post.pekerjaan}</p> */}
                </div>
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <div>{/* <p className="text-sm">{post.noHp}</p> */}</div>
                <div className="flex justify-end gap-2">
                  <Link
                    href={`/dashboard/post/${post.id}/edit`}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "px-2"
                    )}
                  >
                    <Pencil className="h-4 w-4" />
                  </Link>
                  <DeleteButton
                    id={post.id}
                    page="Post"
                    deleteFn={deletePost}
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
                Diperbarui
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Judul
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Jenis
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Tanggal
              </th>
              {/* <th scope="col" className="px-3 py-5 font-medium">
                Penghasilan
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Alamat
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                No. Hp
              </th> */}
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {posts?.map((post) => (
              <tr
                key={post.id}
                className="w-full hover:bg-[#f9f9fa] border-b py-5 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap px-3 py-3">
                  {format(post.updatedAt, "cccc", { locale: id })}
                  <br />
                  {format(post.updatedAt, "dd, MMM yyyy", { locale: id })}
                </td>
                <td className=" px-3 py-3 w-[600px]">{post.judul}</td>
                <td className="whitespace-nowrap px-3 py-3">
                  <Badge
                    className={cn(
                      {
                        "bg-green-100 text-green-600 hover:bg-green-200":
                          post.jenis === "KEGIATAN",
                        "bg-blue-100 text-blue-600 hover:bg-blue-200":
                          post.jenis === "PENGUMUMAN",
                        "bg-yellow-100 text-yellow-600 hover:bg-yellow-200":
                          post.jenis === "ARTIKEL",
                      },
                      "shadow-none"
                    )}
                  >
                    {capitalizeFirstLetter(post.jenis.toLocaleLowerCase())}
                  </Badge>
                </td>
                {/* <td className="whitespace-nowrap px-3 py-3">
                  <p className="whitespace-nowrap text-ellipsis overflow-hidden w-[100px]">
                    {format(post.updatedAt, "dd MMMM yyyy", { locale: id })}
                  </p>
                </td> */}
                <td className="whitespace-nowrap px-3 py-3">
                  {format(post.tanggal, "cccc", { locale: id })}
                  <br />
                  {format(post.tanggal, "dd, MMM yyyy", { locale: id })}
                </td>
                {/* <td className="px-3 py-3">
                  <p className="whitespace-nowrap text-ellipsis w-[100px] overflow-hidden">
                    {post.alamat}
                  </p>
                </td>
                <td className="whitespace-nowrap px-3 py-3">{post.noHp}</td> */}
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    <Link
                      href={`/dashboard/post/${post.id}/edit`}
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "px-2"
                      )}
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>
                    <DeleteButton
                      id={post.id}
                      page="Post"
                      deleteFn={deletePost}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {!posts.length && (
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
