"use client";

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { MaxWidthWrapper } from "./max-width-wrapper";
// import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface CarouselProps {
  imgs: {
    src: string | null;
    title: string;
    href: string;
  }[];
}

export function Carousel({ imgs }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoPlay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  // const [curr, setCurr] = useState<number>(0);
  // const [autoPlay, setAutoPlay] = useState<boolean>(true);
  // const prev = () =>
  //   setCurr((curr) => (curr === 0 ? imgs.length - 1 : curr - 1));
  // const next = () =>
  //   setCurr((curr) => (curr === imgs.length - 1 ? 0 : curr + 1));

  // useEffect(() => {
  //   if (!autoPlay) return;
  //   const slideInterval = setInterval(next, 3000);
  //   return () => clearInterval(slideInterval);
  // }, []);

  return (
    // embla carousel
    <div
      className="overflow-hidden rounded-md ring-2 ring-gray-900/10 shadow-2xl relative group"
      ref={emblaRef}
    >
      <div
        style={{
          backfaceVisibility: "hidden",
        }}
        className="flex touch-pan-y rounded-2xl "
      >
        {imgs.map((img, index) => (
          <div
            style={{
              flex: "0 0 100%",
            }}
            className="min-w-[0] relative mr-2"
            key={index}
          >
            <Image
              width={1400}
              height={780}
              className="lg:h-[40rem] md:h-[30rem] h-[20rem] object-cover w-full rounded-md shadow-2xl"
              src={img.src || siteConfig.thumbnailPlaceholder}
              alt="Your alt text"
            />
            <div className="w-full text-white font-2xl py-20 text-center absolute bottom-[-100%] group-hover:bottom-0 bg-gradient-to-t from-black/50 to-transparent transition-all ease-in-out duration-500">
              <div className="max-w-2xl mx-auto">
                <Link
                  href={img.href}
                  className="text-3xl font-bold tracking-tight hover:underline"
                >
                  {img.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    // <div className="overflow-hidden" ref={emblaRef}>
    //   <div className="flex">
    //     {imgs.map((img, idx) => (
    //       <div
    //         style={{
    //           flex: "0 0 100%",
    //           minWidth: 0,
    //         }}
    //       >
    //         <img src={img} alt="" />
    //       </div>
    //     ))}
    //   </div>
    // </div>

    // <div
    //   className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group"
    //   onMouseEnter={() => {
    //     console.log("enter");
    //     setAutoPlay((autoPlay) => !autoPlay);
    //   }}
    //   onMouseLeave={() => console.log("leave")}
    // >
    //   {/* <div
    //     style={{
    //       backgroundImage: `url(${imgs[curr]})`,
    //     }}
    //     className="w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-2xl ring-4 ring-white "
    //   /> */}
    //   {/* <Image
    //   src={imgs[curr]}
    //   alt="Image"
    //   width={1400}
    //   height={780}
    //   className="w-full h-full object-cover rounded-2xl shadow-2xl ring-4 ring-white duration-500"
    // /> */}
    //   <div className="md:hidden md:group-hover:flex absolute inset-0 flex items-center justify-between px-8">
    //     <button
    //       onClick={prev}
    //       className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
    //     >
    //       <ChevronLeft size={25} />
    //     </button>
    //     <button
    //       onClick={next}
    //       className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
    //     >
    //       <ChevronRight size={25} />
    //     </button>
    //   </div>
    // </div>
  );
}
