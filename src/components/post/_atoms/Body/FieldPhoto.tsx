"use client";

import { X, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

export default function FieldPhoto() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      {selectedImage ? (
        <div className="relative aspect-square">
          <Image
            src={selectedImage || "/placeholder.svg"}
            alt="Preview"
            className="object-cover w-full h-full rounded-lg"
          />
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
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
    </>
  );
};