import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Image from "next/image";

export default function Page() {
  return (
    <MaxWidthWrapper className="mb-12 mt-10 md:mt-20 flex flex-col w-full items-center justify-center">
      <article className="prose md:px-0 px-3">
        <h1>Sejarah Masjid Zaid bin Tsabit</h1>
        <Image
          src="/masjid/masjid-2.jpg"
          width="1280"
          height="720"
          className="rounded-lg"
          alt="Masjid"
        />
        <p>
          Kegiatan ini berawal pada tahun 2017, tergabung dalam Grup WA Kamboja
          Mengaji yang beranggotakan Pengurus dan Jamaah di Masjid Nurul Falah
          Jalan Kamboja Rt 3 Rw 2 Kel. Delima Kec. Tampan Kota Pekanbaru.
          Kegiatan yang dilaksanakan berupa Tahsin dan penyampaian informasi
          terkait kajian dan dauroh di Kota Pekanbaru. Namun ditahun tersebut
          tepatnya setelah Idul Fitri terjadi pergantian pengurus Masjid Nurul
          Falah maka kegiatan tahsin berpindah sebanyak 4 kali dan terakhir di
          rumah Pak Yana. Dirumah kediaman Pak Yana inilah sering dilakukan
          pembicaraan untuk bersama-sama dapat membangun Masjid yang didalamnya
          dapat diadakan tahsin dan sekaligus menghidupkan Sunnah dengan
          mengadakan kajian2 yg bersifat Rutin dan Daurah di lingkungan jalan
          Kamboja.
        </p>
        <Image
          src="/masjid/masjid-3.jpg"
          width="1280"
          height="720"
          className="rounded-lg"
          alt="Masjid"
        />
        <p>
          Qaddarullah, sekitar akhir 2018 Allah Tabaraka wa Ta&apos;ala
          memberikan jalan keluar dari kondisi dan keinginan para Jama&apos;ah
          Kamboja Mengaji.Penerima Wakaf tanah dan Masjid Al Bahar yang terletak
          di Jalan Garuda / Dahlia Rt 4 Rw 2 Kel. Delima Kec. Tampan yang
          bernama Bpk Roedi dan sekaligus pejabat Ketua RT setempat menawarkan
          kepada Jama&apos;ah Kamboja Mengaji untuk melanjutkan pembangunan
          Masjid Al-Bahar yang terbengkalai selama 10 tahun. Syukur
          Alhamdulillah penawaran tersebut pun diterima lalu disepakati untuk
          menemui pewakaf tanah yang bernama Ibu Martalena seorang pegawai Dinas
          Kesehatan Provinsi Riau dan Bapak Auni sebagai salah seorang Tokoh
          Masyarakat Tobekgodang guna dapat mengurus seluruh administrasi
          perpindahan Nazir wakaf atas tanah dan Masjid Baharuddin tersebut.
          Setelah terjadi kesepakatan antara Pemberi wakaf, Nazir lama dan Nazir
          yang akan dibentuk maka selanjutnya diurus Pendaftaran Yayasan
          Jami&apos;ul Qur&apos;an ke Kemenhumkam.
        </p>
        <Image
          src="/masjid/masjid-4.jpg"
          width="1280"
          height="720"
          className="rounded-lg"
          alt="Masjid"
        />
        <p>
          Masjid yang sebelumnya Bernama Masjid Al-Bahar kemudian diganti dengan
          nama Masjid Zaid Bin Tsabit Pekanbaru. Pada pertengahan Bulan Februari
          2019 dimulai pekerjaan pembangunan Masjid Zaid bin Tsabit dan
          ditargetkan dapat digunakan pada Awal Ramadhan 1441 H / 2019 M. pada
          saat sekarang Masjid Zaid bin Tsabit bisa menampung keseluruhan jamaah
          sekitar 500 jamaah serta untuk kegiatan yang dilaksanakan atau
          diselenggarakan pada masjid Zaid bin Tsabit diantaranya yaitu, shalat
          berjamaah lima waktu, kajian ilmiah, tahsin Al Qur&apos;an, Pendidikan
          bahasa arab, pelaksanaan ibadah Qurban, dan penyelenggaran fardhu
          kifayah.
        </p>
      </article>
    </MaxWidthWrapper>
  );
}
