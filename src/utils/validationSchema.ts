// npm i zod
import { z } from "zod";

export const signUpValidation = z.object({
  user_name: z.string().min(1, "名前は必須です。").max(12, "12文字以下で入力してください。"),
  account_id: z.string().min(1, "アカウントIDは必須です。").max(12, "12文字以下で入力してください。"),
  email: z.string().min(1, "メールアドレスは必須です。").email("正しいメールアドレスで入力してください。"),
  password: z.string().min(1, "パスワードは必須です。").min(6, "6文字以上で入力してください。").max(15, "15文字以下で入力してください。")
});

export const signInValidation = z.object({
  email: z.string().min(1, "メールアドレスは必須です。").email("正しいメールアドレスで入力してください。"),
  password: z.string().min(1, "パスワードは必須です。").min(6, "6文字以上で入力してください。").max(15, "15文字以下で入力してください。")
});