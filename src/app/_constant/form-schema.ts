import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email tidak boleh kosong" })
    .email({ message: "Email tidak valid" }),
  sandi: z.string().min(2, { message: "Password tidak boleh kosong" }),
  rememberMe: z.boolean().default(false),
});
