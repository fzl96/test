import { AsideArtikel } from "@/components/aside-artikel";
import { AsideKegiatan } from "@/components/aside-kegiatan";
import { AsidePengumuman } from "@/components/aside-pengumuman";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Renderer from "@/components/render";
import { Badge } from "@/components/ui/badge";
import { fetchPostBySlug } from "@/lib/home-data";
import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Image from "next/image";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await fetchPostBySlug(params.slug);

  return (
    <MaxWidthWrapper className="mb-12 mt-10 md:mt-20 flex flex-col w-full">
      <div className="flex gap-10 items-start md:flex-row flex-col">
        <article className="prose">
          <div className="flex gap-5 mb-0">
            <div className="flex p-7 rounded-xl border  bg-gray-400/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl flex-col">
              <h1 className="mb-0 text-2xl md:text-4xl">{post?.judul}</h1>
              <div className="flex md:hidden text-sm">
                <p className="my-3">
                  {post?.penulis?.name} |{" "}
                  {format(post?.tanggal || new Date(), "cccc, dd MMMM yyyy", {
                    locale: id,
                  })}
                </p>
              </div>
              <h4 className="text-gray-500 mt-3 mb-5 font-normal md:flex hidden items-center gap-3 ">
                {post?.penulis?.name}
                <span> | </span>
                <span>
                  {format(post?.tanggal || new Date(), "cccc, dd MMMM yyyy", {
                    locale: id,
                  })}
                </span>
                <span>|</span>
                <span>
                  <Badge
                    className={cn(
                      {
                        "bg-green-100 text-green-600 hover:bg-green-200":
                          post?.jenis === "KEGIATAN",
                        "bg-blue-100 text-blue-600 hover:bg-blue-200":
                          post?.jenis === "PENGUMUMAN",
                        "bg-yellow-100 text-yellow-600 hover:bg-yellow-200":
                          post?.jenis === "ARTIKEL",
                      },
                      "shadow-none"
                    )}
                  >
                    {post?.jenis === "KEGIATAN"
                      ? "Aktivitas"
                      : capitalizeFirstLetter(
                          post?.jenis.toLowerCase() || "lainnya"
                        )}
                  </Badge>
                </span>
              </h4>
              <Image
                src={post?.thumbnail || ""}
                alt={post?.judul || ""}
                width={500}
                height={300}
                className="rounded-md"
              />
              <Renderer content={post?.konten || ""} />
            </div>
          </div>
        </article>
        <aside className="prose md:top-[4rem] md:sticky md:px-0 px-3">
          <h3 className="text-xl font-semibold">
            {capitalizeFirstLetter(post?.jenis.toLowerCase() || "lainnya")}{" "}
            Terbaru
          </h3>
          <div className="px-3">
            <Suspense fallback={<div>Loading...</div>}>
              {post?.jenis === "KEGIATAN" && <AsideKegiatan />}
              {post?.jenis === "PENGUMUMAN" && <AsidePengumuman />}
              {post?.jenis === "ARTIKEL" && <AsideArtikel />}
            </Suspense>
          </div>
        </aside>
      </div>
    </MaxWidthWrapper>
  );
}
