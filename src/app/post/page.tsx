"use client"

import { X, ImageIcon } from "lucide-react"
import type React from "react"
import { useState, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function PostPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-14 px-4 mx-auto">
          <button className="text-gray-500">キャンセル</button>
          <h1 className="text-xl font-bold text-orange-500">投稿</h1>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
            シェア
          </Button>
        </div>
      </header>

      <main className="container px-4 py-6 mx-auto max-w-2xl">
        <div className="space-y-6">
          {/* Image Upload Section */}
          <div className="space-y-2">
            <Label>写真</Label>
            {selectedImage ? (
              <div className="relative aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Preview"
                  className="object-cover w-full h-full rounded-lg"
                />
                <button
                  onClick={removeImage}
                  className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 transition-colors">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="flex flex-col items-center cursor-pointer">
                  <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">タップして写真を選択</span>
                </label>
              </div>
            )}
          </div>

          {/* Time Period */}
          <div className="space-y-2">
            <Label htmlFor="time">時間帯</Label>
            <Input type="datetime-local" id="time" className="w-full" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">タイトル</Label>
            <Input type="text" id="title" placeholder="タイトルを入力" className="w-full" />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label htmlFor="tags">タグ付け</Label>
            <Input type="text" id="tags" placeholder="#タグ1 #タグ2" className="w-full" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">説明</Label>
            <Textarea id="description" placeholder="説明を入力" className="w-full min-h-[100px]" />
          </div>
        </div>
      </main>
    </div>
  )
}

