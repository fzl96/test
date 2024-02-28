import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import Kegiatan from "@/components/kegiatan";
import Artikel from "@/components/artikel";
import Pengumuman from "@/components/pengumuman";
import { formatDate } from "@/lib/utils";
import { CarouselSlide } from "@/components/carousel-slide";

export const metadata: Metadata = {
  title: "Masjid Zaid bin Tsabit",
  description:
    "Masjid Zaid bin Tsabit merupakan sebuah masjid yang ada di Kota Pekanbaru yang berlokasi di Jalan Delima",
};

const waktu = [
  {
    value: "Fajr",
    label: "Subuh",
  },
  {
    value: "Dhuhr",
    label: "Dzuhur",
  },
  {
    value: "Asr",
    label: "Ashar",
  },
  {
    value: "Maghrib",
    label: "Maghrib",
  },
  {
    value: "Isha",
    label: "Isya",
  },
];

export default async function Home() {
  noStore();
  const today = new Date();
  const query = new URLSearchParams({
    latitude: "0.46907443531237847",
    longitude: "101.4074763554276",
    method: "15",
  });
  const apiURL = `https://api.aladhan.com/v1/timings/${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}?${query}`;
  const res = await fetch(apiURL);
  const jadwal = await res.json();
  // const jadwal = await res.json();
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">Zaid Bin Tsabit</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-center">
          Selamat Datang di <br />
          <span>Masjid</span>
          <br />
          <span className="text-blue-500">Zaid bin Tsabit</span>
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg text-center">
          Tempat di mana kedamaian, dan kesatuan tumbuh bersama. Kami menyambut
          Anda untuk berbagi dalam pengalaman rohani dan pembelajaran yang
          mendalam di komunitas kami.
        </p>
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="#kegiatan-masjid"
        >
          Lihat Kegiatan
        </Link>
      </MaxWidthWrapper>
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80a4ff] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <CarouselSlide />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80a4ff] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full"></div>
      <div
        id="jadwal-sholat"
        className=" mt-32 mx-auto max-w-5xl sm:mt-56 relative bg-primary/70 rounded-xl"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <div className="my-8 space-y-4 w-full p-20 flex flex-col items-center gap-10 md:space-y-0">
            <h1 className="text-3xl text-white font-semibold ">
              Jadwal Sholat {formatDate(new Date())}
            </h1>
            <div className="md:flex md:gap-12 max-w-2xl">
              {/* <div className="text-white space-y-2">
                <p>Jadwal Sholat Selanjutnya</p>
                <p className="text-4xl font-semibold tracking-tight">
                  Shalat {nextPrayerTime?.next}
                </p>

              </div> */}
              {waktu.map((item, index) => (
                <div className="md:flex-1" key={index}>
                  <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-xl font-semibold text-white">
                      Shalat {item.label}
                    </span>
                    <span className="mt-2 text-white">
                      {jadwal.data?.timings[item.value]} WIB
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Suspense>
      </div>
      <div
        id="kegiatan-masjid"
        className="mx-auto mb-32 mt-20 max-w-5xl sm:mt-56 relative"
      >
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl text-center">
              Aktivitas Masjid
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-center">
              Aktivitas terbaru di Masjid Zaid bin Tsabit{" "}
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-5rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-[0.15] sm:left-[calc(50%-25rem)] sm:w-[72.1875rem]"
          />
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Kegiatan />
        </Suspense>
      </div>
      <div
        id="pengumuman-masjid"
        className="mx-auto mb-32 mt-20 max-w-5xl sm:mt-56 relative"
      >
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl text-center">
              Pengumuman Masjid
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-center">
              Pengumuman Terbaru dari Masjid Zaid bin Tsabit{" "}
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-5rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-[0.15] sm:left-[calc(50%-25rem)] sm:w-[72.1875rem]"
          />
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Pengumuman />
        </Suspense>
      </div>
      <div
        id="artikel-masjid"
        className="mx-auto mb-32 mt-20 max-w-5xl sm:mt-56 relative"
      >
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl text-center">
              Artikel{" "}
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-center">
              Artikel Terbaru dari Masjid Zaid bin Tsabit{" "}
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-5rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-[0.15] sm:left-[calc(50%-25rem)] sm:w-[72.1875rem]"
          />
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Artikel />
        </Suspense>
      </div>
    </>
  );
}
