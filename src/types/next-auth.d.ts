import { User } from "next-auth";
import { JWT } from "next-auth/jwt";

type userId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
  }
}

declare module "next-auth" {
  interface session {
    user: User & {
      id: string;
      username: string;
    };
  }
}
