import { fetchLatestKegiatan } from "@/lib/home-data";
import { Suspense } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { Carousel } from "./carousel";

export async function CarouselSlide() {
  const kegiatan = await fetchLatestKegiatan(5);

  return (
    <>
      {/* <h1 className="text-5xl">Test</h1> */}
      <Suspense fallback={<>Loading...</>}>
        <Carousel
          imgs={kegiatan.map((item) => {
            return {
              src: item.thumbnail,
              title: item.judul,
              href: `/post/${item.slug}`,
            };
          })}
        />
      </Suspense>
    </>
  );
}
