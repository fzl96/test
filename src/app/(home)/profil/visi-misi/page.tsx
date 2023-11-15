import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";

export default function Page() {
  return (
    <MaxWidthWrapper className="mb-12 mt-10 md:mt-20 flex flex-col w-full items-center justify-center">
      <article className="prose px-3 md:px-0">
        <h1>Visi dan Misi Masjid Zaid bin Tsabit</h1>
        <h2>Visi</h2>
        <blockquote>
          “Menjadikan suatu lembaga atau aset pemberdayaan umat yang bernilai
          dan menjadi percontohan ditingkat kecamatan Binawidya Kota Pekanbaru
          dalam pengelolaan baik segi Idaroh, Imarah dan Riayah”
        </blockquote>
        <h2>Misi</h2>
        <ol>
          <li>
            Meningkatkan kualita pelayanan ibadah bagi masyarakat serta
            menjunjung kesucian masjid sebagai rumah Allah sehingga dapat
            terwujud suasana masjid yang baik, aman, tenteram, terhormat dan
            mulia disisi Allah sehingga perlu di bina kemakmurannya agar fungsi
            masjid sebagai tempat ibadah juga berfungsi sebagai syiar dakwah dan
            taqwa.
          </li>
          <li>
            Menjadikan masjid sebagai tempat untuk beribadah kepada Allah semata
            dan sebagai pusat peradaban islam.
          </li>
          <li>Membina jamaah masjid menjadi pribadi muslim yang bertaqwa.</li>
          <li>
            Menuju masyarakat yang islami dan sejahtera serta di ridhoi Allah
            Subhanahu Wata&apos;ala
          </li>
        </ol>
      </article>
    </MaxWidthWrapper>
  );
}
