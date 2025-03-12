"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import Header from "@/components/common/_organism/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignInType } from "@/types/types";
import { signIn } from "@/utils/api/auth/api";
import { signInValidation } from "@/utils/validationSchema";

export default function Page() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm<SignInType>({
    mode: 'onChange',
    resolver: zodResolver(signInValidation)
  });

  const formSubmit: SubmitHandler<SignInType> = async (formData) => {
    const loadingToast = toast.loading("ログイン中...");
    try {
      const res = await signIn(formData);
      const ID = res.details[0].id;
      const session_id = res.details[0].session_id
      localStorage.setItem("account_id", ID);
      localStorage.setItem("session_id", session_id);

      toast.success("ログインに成功しました！", { id: loadingToast });
      setTimeout(() => {
        toast.dismiss(loadingToast);
        router.push("/");
      }, 1000);
    } catch (error) {
      toast.error("ログインに失敗しました。",  { id: loadingToast });
      console.error("エラー", error);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col min-h-screen bg-gray-200">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full sm:max-w-md">
            <div className="p-6 bg-white rounded-lg sm:p-8 sm:shadow-md">
              <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold text-orange-500">ログイン</h1>
                <p className="text-sm text-gray-500">アカウントにログインしてください</p>
              </div>

              <form onSubmit={handleSubmit(formSubmit)} className="mt-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input 
                        {...field} 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        className="w-full"
                        autoComplete="username"
                      />
                    )}
                  />
                  {errors.email && <p className="text-red-500 text-xs ml-2">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">パスワード</Label>
                  <div className="relative">
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          {...field}
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••"
                          className="w-full"
                          autoComplete="current-password"
                        />
                      )}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-xs ml-2">{errors.password.message}</p>}
                  <div className="flex items-center justify-end">
                    <Link href="/auth/forgot-password" className="text-sm text-orange-500 hover:text-orange-600">
                      パスワードをお忘れですか？
                    </Link>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  ログイン
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-gray-500 bg-white">または</span>
                  </div>
                </div>

                <Button type="button" variant="outline" className="w-full mt-4">
                  Googleでログイン
                </Button>
              </div>

              <p className="mt-6 text-sm text-center text-gray-500">
                アカウントをお持ちでない方は{" "}
                <Link href="/auth/sign-up" className="text-orange-500 hover:text-orange-600">
                  新規登録
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};