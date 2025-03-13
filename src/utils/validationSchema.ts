// npm i zod
import { z } from "zod";

export const signUpValidation = z.object({
  user_name: z.string().min(1, "ユーザー名は必須です。").max(12, "12文字以下で入力してください。"),
  account_id: z.string().min(1, "アカウントIDは必須です。").max(12, "12文字以下で入力してください。"),
  email: z.string().min(1, "メールアドレスは必須です。").email("正しいメールアドレスで入力してください。"),
  password: z.string().min(1, "パスワードは必須です。").min(6, "6文字以上で入力してください。").max(15, "15文字以下で入力してください。")
});

export const signInValidation = z.object({
  email: z.string().min(1, "メールアドレスは必須です。").email("正しいメールアドレスで入力してください。"),
  password: z.string().min(1, "パスワードは必須です。").min(6, "6文字以上で入力してください。").max(15, "15文字以下で入力してください。")
});

export const postValidation = z.object({
  image_path: z.string().optional(),
  time_section: z.string().min(1, "時間帯は必須です。"),
  is_public: z.string(),
  title: z.string().min(1, "タイトルは必須です。").max(15, "15文字以下で入力してください。"),
  description: z.string().optional()
});

export const updateProfileValidation = z.object({
  profile_image_path: z.string().optional(),
  user_name: z.string().min(1, "ユーザー名は必須です。").max(12, "12文字以下で入力してください。"),
  account_id: z.string().min(1, "アカウントIDは必須です。").max(12, "12文字以下で入力してください。"),
  email: z.string().min(1, "メールアドレスは必須です。").email("正しいメールアドレスで入力してください。"),
  is_public: z.string(),
  description: z.string().optional()
})