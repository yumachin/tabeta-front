"use client"

import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center w-full px-4 sm:max-w-md sm:mx-auto">
        <div className="p-6 bg-white rounded-lg sm:p-8 sm:shadow-md">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold text-orange-500">ログイン</h1>
            <p className="text-sm text-gray-500">アカウントにログインしてください</p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input id="email" type="email" placeholder="your@email.com" required className="w-full" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">パスワード</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
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
  )
}

