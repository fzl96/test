import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil",
  description: "Profil Masjid Zaid bin Tsabit",
};

export default function Page() {
  return (
    <MaxWidthWrapper className="mb-12 mt-10 md:mt-20 flex flex-col w-full">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Profil Masjid Zaid bin Tsabit
      </h1>
      <div className="flex md:gap-5 items-start flex-col-reverse md:flex-row">
        <article className="prose">
          <div className="md:border-r">
            <h2></h2>
            <h2>Sejarah</h2>
            <p>
              Kegiatan ini berawal pada tahun 2017, tergabung dalam Grup WA
              Kamboja Mengaji yang beranggotakan Pengurus dan Jamaah di Masjid
              Nurul Falah Jalan Kamboja Rt 3 Rw 2 Kel. Delima Kec. Tampan Kota
              Pekanbaru. Kegiatan yang dilaksanakan berupa Tahsin dan
              penyampaian informasi terkait kajian dan dauroh di Kota Pekanbaru.
              Namun ditahun tersebut tepatnya setelah Idul Fitri terjadi
              pergantian pengurus Masjid Nurul Falah maka kegiatan tahsin
              berpindah sebanyak 4 kali dan terakhir di rumah Pak Yana. Dirumah
              kediaman Pak Yana inilah sering dilakukan pembicaraan untuk
              bersama-sama dapat membangun Masjid yang didalamnya dapat diadakan
              tahsin dan sekaligus menghidupkan Sunnah dengan mengadakan kajian2
              yg bersifat Rutin dan Daurah di lingkungan jalan Kamboja.
            </p>
            <p>
              Qaddarullah, sekitar akhir 2018 Allah Tabaraka wa Ta&apos;ala
              memberikan jalan keluar dari kondisi dan keinginan para
              Jama&apos;ah Kamboja Mengaji.Penerima Wakaf tanah dan Masjid Al
              Bahar yang terletak di Jalan Garuda / Dahlia Rt 4 Rw 2 Kel. Delima
              Kec. Tampan yang bernama Bpk Roedi dan sekaligus pejabat Ketua RT
              setempat menawarkan kepada Jama&apos;ah Kamboja Mengaji untuk
              melanjutkan pembangunan Masjid Al-Bahar yang terbengkalai selama
              10 tahun. Syukur Alhamdulillah penawaran tersebut pun diterima
              lalu disepakati untuk menemui pewakaf tanah yang bernama Ibu
              Martalena seorang pegawai Dinas Kesehatan Provinsi Riau dan Bapak
              Auni sebagai salah seorang Tokoh Masyarakat Tobekgodang guna dapat
              mengurus seluruh administrasi perpindahan Nazir wakaf atas tanah
              dan Masjid Baharuddin tersebut. Setelah terjadi kesepakatan antara
              Pemberi wakaf, Nazir lama dan Nazir yang akan dibentuk maka
              selanjutnya diurus Pendaftaran Yayasan Jami&apos;ul Qur&apos;an ke
              Kemenhumkam.
            </p>
            <p>
              Masjid yang sebelumnya Bernama Masjid Al-Bahar kemudian diganti
              dengan nama Masjid Zaid Bin Tsabit Pekanbaru. Pada pertengahan
              Bulan Februari 2019 dimulai pekerjaan pembangunan Masjid Zaid bin
              Tsabit dan ditargetkan dapat digunakan pada Awal Ramadhan 1441 H /
              2019 M. pada saat sekarang Masjid Zaid bin Tsabit bisa menampung
              keseluruhan jamaah sekitar 500 jamaah serta untuk kegiatan yang
              dilaksanakan atau diselenggarakan pada masjid Zaid bin Tsabit
              diantaranya yaitu, shalat berjamaah lima waktu, kajian ilmiah,
              tahsin Al Qur&apos;an, Pendidikan bahasa arab, pelaksanaan ibadah
              Qurban, dan penyelenggaran fardhu kifayah.
            </p>
            <h2>Struktur Organisasi</h2>
            <Image
              src={"/struktur-organisasi.png"}
              width={800}
              height={600}
              alt="Struktur Organisasi"
            />
          </div>
        </article>
        <aside className="prose mt-5 md:mt-[5.5rem] md:sticky md:top-[4rem]">
          <h2>Imam dan Muadzin</h2>
          <h3>Imam</h3>
          <ol>
            <li>1. Minal Muslimin, M.Pd</li>
            <li>Basyir Hidayatullah, S.Pd.I., MA</li>
            <li>Hanif Ramadhan, Lc</li>
          </ol>
          <h3>Muadzin</h3>
          <ol>
            <li>Hazizi</li>
            <li>Restu Bayu Stavi</li>
          </ol>
          <h2>Visi dan Misi</h2>
          <h3>Visi</h3>
          <blockquote>
            “Menjadikan suatu lembaga atau aset pemberdayaan umat yang bernilai
            dan menjadi percontohan ditingkat kecamatan Binawidya Kota Pekanbaru
            dalam pengelolaan baik segi Idaroh, Imarah dan Riayah”
          </blockquote>
          <h3>Misi</h3>
          <ol>
            <li>
              Meningkatkan kualita pelayanan ibadah bagi masyarakat serta
              menjunjung kesucian masjid sebagai rumah Allah sehingga dapat
              terwujud suasana masjid yang baik, aman, tenteram, terhormat dan
              mulia disisi Allah sehingga perlu di bina kemakmurannya agar
              fungsi masjid sebagai tempat ibadah juga berfungsi sebagai syiar
              dakwah dan taqwa.
            </li>
            <li>
              Menjadikan masjid sebagai tempat untuk beribadah kepada Allah
              semata dan sebagai pusat peradaban islam.
            </li>
            <li>Membina jamaah masjid menjadi pribadi muslim yang bertaqwa.</li>
            <li>
              Menuju masyarakat yang islami dan sejahtera serta di ridhoi Allah
              Subhanahu Wata’ala
            </li>
          </ol>
        </aside>
      </div>
    </MaxWidthWrapper>
  );
}
