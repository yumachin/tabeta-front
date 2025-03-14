"use client"

import { ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"


export default function VerifySentPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleEnableTwoFactor = () => {
    setIsLoading(true)
    // Simulate a slight delay before redirecting
    setTimeout(() => {
      router.push("/two-auth/verify")
    }, 500)
  }

  // useEffect(() => {
  //   const fetchEmail = async () => {
  //     try {
  //       const user_id = Number(localStorage.getItem("user_id")); // ローカルストレージから取得
  //       if (!user_id) throw new Error("User ID not found in localStorage");

  //       const data = await getEmail(user_id);
  //       setEmail(data.email);
  //     } catch (error) {
  //       console.error("Get email API error", error);
  //     }
  //   };

  //   fetchEmail();
  // }, []);


  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center w-full px-4 sm:max-w-md sm:mx-auto">
        <div className="p-6 bg-white rounded-lg sm:p-8 sm:shadow-md">
          <div className="flex items-center mb-6">
            <Link href="/auth/sign-in" className="text-gray-500 hover:text-gray-700">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="ml-4 text-xl font-bold text-orange-500">二段階認証</h1>
          </div>

          <div className="flex flex-col items-center justify-center py-6">
            <div className="flex items-center justify-center w-20 h-20 mb-6 bg-orange-100 rounded-full">
              <Shield className="w-10 h-10 text-orange-500" />
            </div>

            <h2 className="mb-4 text-xl font-bold text-center">二段階認証を有効にしますか？</h2>

            <p className="mb-6 text-sm text-center text-gray-600">
              二段階認証を有効にすると、アカウントのセキュリティが強化されます。ログイン時にメールで送信される確認コードの入力が必要になります。
            </p>

            <div className="p-4 mb-6 bg-gray-50 rounded-lg w-full">
              <h3 className="mb-2 font-medium text-center">二段階認証のメリット</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">✓</span>
                  アカウントの不正アクセスを防止
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">✓</span>
                  個人情報の保護を強化
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">✓</span>
                  パスワードが漏洩した場合でも安全
                </li>
              </ul>
            </div>

            <div className="flex flex-col w-full gap-3">
              <Button
                onClick={handleEnableTwoFactor}
                className="w-full bg-orange-500 hover:bg-orange-600"
                disabled={isLoading}
              >
                {isLoading ? "処理中..." : "メールを送信する"}
              </Button>

              <Link href="/" className="text-sm text-center text-gray-500 hover:text-gray-700">
                今はしない
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

