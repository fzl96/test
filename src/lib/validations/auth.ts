import { z } from "zod";

export const UserAuthSchema = z.object({
  username: z.string(),
  password: z.string(),
});
