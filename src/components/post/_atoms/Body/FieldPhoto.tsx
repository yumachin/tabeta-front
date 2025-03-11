"use client";

import { X, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState, useRef, ChangeEvent } from "react";

export default function FieldPhoto({
  onChange,
  value,
  name
}: FieldPhotoProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(value || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setSelectedImage(base64Image);
        if (onChange) {
          onChange(base64Image);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (onChange) {
      onChange(null); 
    }
  };

  return (
    <>
      {selectedImage ? (
        <div className="relative flex justify-center">
          <Image
            src={selectedImage || "/placeholder.svg"}
            alt="Preview"
            width={24}
            height={24}
            style={{
              width: "80%",
              height: "auto",
            }}
            layout="intrinsic"
            className="object-contain rounded-lg"
          />
          <button
            onClick={removeImage}
            className="absolute top-1 right-11 p-1 bg-black/50 rounded-full text-white hover:bg-black/70"
          >
            <X className="w-4 h-4" />
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
            id={name} // 名前を動的に変更して、react-hook-formのフィールドと一致させる
          />
          <label htmlFor={name} className="flex flex-col items-center cursor-pointer">
            <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">タップして写真を選択</span>
          </label>
        </div>
      )}
    </>
  );
};

type FieldPhotoProps = {
  onChange?: (value: string | null) => void; 
  value?: string | null;
  name?: string;
}