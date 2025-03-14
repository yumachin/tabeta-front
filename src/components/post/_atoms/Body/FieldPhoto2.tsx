"use client";

import { Camera } from "lucide-react";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function FieldPhoto2({
  onChange,
  value,
  selectedImage,
  setSelectedImage
}: FieldPhotoProps2) {

  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative">
        <Avatar className="h-24 w-24 border-2">
          <AvatarImage
            src={`https://160.251.136.146/storage/${selectedImage}` || "/placeholder.svg"}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <AvatarFallback>写真</AvatarFallback>
        </Avatar>

        {value && (
          <Button
            onClick={removeImage}
            className="absolute -top-6 -right-30 bg-transparent shadow-none text-xs text-red-500"
          >
            <p>写真を削除</p>
          </Button>
        )}

        <Button
          size="icon"
          className="absolute bottom-0 right-0 rounded-full bg-orange-500 hover:bg-orange-600"
          onClick={handleCameraClick}
        >
          <Camera className="h-4 w-4" />
        </Button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

type FieldPhotoProps2 = {
  onChange?: (value: string | null) => void; 
  value?: string | null;
  selectedImage: string | null;
  setSelectedImage:  Dispatch<SetStateAction<string | null>>;
}