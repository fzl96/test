import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";

export default function Page() {
  return (
    <MaxWidthWrapper className="mb-12 mt-10 md:mt-20 flex flex-col w-full items-center justify-center">
      <article className="prose h-[calc(100vh-18rem)] px-5 md:px-0">
        <h1>Pimpinan Masjid Zaid bin Tsabit</h1>
        <Image
          src="/masjid/pimpinan.png"
          width="1270"
          height="720"
          layout="intrinsic"
          alt="404"
        />
      </article>
    </MaxWidthWrapper>
  );
}
