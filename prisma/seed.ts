import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

(async () => {
  const password = await bcrypt.hash("123456", 10);

  const user = await prisma.user.create({
    data: {
      name: "admin",
      username: "admin",
      password,
    },
  });
})();
