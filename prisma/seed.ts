import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const data = [
  {
    id: "clofstxkc00004fsc92b9j2kq",
    nama: "Sajadah",
    jumlah: "10",
    keterangan: "",
    createdAt: "2023-11-01 13:34:00.492",
    updatedAt: "2023-11-16 06:56:53.808",
  },
  {
    id: "cloft4zvo00024fscbjz7b7gq",
    nama: "Microphone",
    jumlah: "2",
    keterangan: "Microphone 2 buah",
    createdAt: "2023-11-01 13:42:36.668",
    updatedAt: "2023-11-01 16:01:58.482",
  },
  {
    id: "cloyn0x1u0000l8089w24vwas",
    nama: "TV",
    jumlah: "2",
    keterangan: "",
    createdAt: "2023-11-14 17:59:06.067",
    updatedAt: "2023-11-14 17:59:06.067",
  },
];

async function main() {
  for (let inventaris of data) {
    const { id, nama, jumlah, keterangan, createdAt, updatedAt } = inventaris;
    await prisma.inventaris.create({
      data: {
        id,
        nama,
        jumlah: parseInt(jumlah),
        keterangan,
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt),
      },
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
