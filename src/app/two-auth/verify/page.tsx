"use client"

import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getEmail, createCode, cheackCode } from "@/utils/api/two-auth/api" 

export default function VerifyPage() {
  const [email, setEmail] = useState<string>("")
  const [code, setCode] = useState<string[]>(Array(6).fill(""))
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resendTrigger, setResendTrigger] = useState(0) // resend用トリガー追加
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()

  // API連携呼び出し（resendTrigger の変更で再実行）
  useEffect(() => {
    console.log("adwadd");
    const userIdStr = localStorage.getItem("user_id")
    if (userIdStr) {
      const user_id = Number(userIdStr)
      ;(async () => {
        try {
          const emailFromApi = await getEmail(user_id)
          setEmail(emailFromApi)
          const result = await createCode(user_id, emailFromApi)
          console.log("createCode result:", result)
        } catch (error) {
          console.error("Error in createCode:", error)
          router.push("/two-auth/verify-sent")
        }
      })()
    }
  }, [resendTrigger, router])

  // Timer countdown effect（コメントアウト）
  /*
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])
  */

  // Handle input change
  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(0, 1)
    }
    if (value && !/^\d+$/.test(value)) {
      return
    }
    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  // Handle key down
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text")
    if (!/^\d+$/.test(pastedData)) return
    const digits = pastedData.slice(0, 6).split("")
    const newCode = [...code]
    digits.forEach((digit, index) => {
      if (index < 6) {
        newCode[index] = digit
      }
    })
    setCode(newCode)
    const nextEmptyIndex = newCode.findIndex((val) => val === "")
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus()
    } else {
      inputRefs.current[5]?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const userIdStr = localStorage.getItem("user_id")
    if (!userIdStr) {
      console.error("User ID not found in localStorage")
      setIsSubmitting(false)
      return
    }
    const user_id = Number(userIdStr)
    const enteredCode = code.join("") // 6桁のコード

    try {
      const details = await cheackCode(user_id, enteredCode)
      console.log("cheackCode response details:", details)
      if (details === "Two-factor authentication successful") {
        router.push("/")
      } else if (details === "The one-time password has expired." || details === "You missed three time. Push the button one more time.") {
        router.push("/two-auth/verify-sent")
      } else if (details === "Unmatched one-time password. Try again.") {
        alert("認証コードが一致しません。再度お試しください。")
        setCode(Array(6).fill(""))
        inputRefs.current[0]?.focus()
      }
    } catch (error) {
      console.error("Error while checking code:", error)
      alert("認証に失敗しました。再度お試しください。")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle resend code
  const handleResend = () => {
    console.log("Resend code")
    setResendTrigger(prev => prev + 1) // resendTrigger 更新で useEffect 再実行
    setCode(Array(6).fill("")) // 入力状態を初期状態にリセット
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center w-full px-4 sm:max-w-md sm:mx-auto">
        <div className="p-6 bg-white rounded-lg sm:p-8 sm:shadow-md">
          <div className="flex items-center mb-6">
            <Link href="/auth/sign-in" className="text-gray-500 hover:text-gray-700">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="ml-4 text-xl font-bold text-orange-500">認証コード確認</h1>
          </div>
          <div className="mb-8 text-center">
            <p className="text-sm text-gray-600">
              登録したメールアドレスに送信された6桁の認証コードを入力してください
            </p>
            <p className="mt-2 text-sm font-medium">{email}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-2 mb-8">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              ))}
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600"
              disabled={code.join("").length !== 6 || isSubmitting}
            >
              {isSubmitting ? "認証中..." : "認証する"}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">コードが届きませんか？</p>
            <button
              onClick={handleResend}
              // disabled={timer > 0} // コメントアウト
              className="mt-2 text-sm font-medium text-orange-500 hover:text-orange-600"
            >
              コードを再送信
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
