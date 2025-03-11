"use client";

import axios from "axios";
import { Pencil, Camera } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { User } from "@/types/types";

import DefaultUserIcon from "../../../../public/DefaultUserIcon.png";

export function ProfileEdit(props: ProfileEditProps) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>(props.user.profile_image_path);
  const [privacy, setPrivacy] = useState<string>(props.user.is_public ? "true" : "false");
  const [name, setName] = useState<string>(props.user.user_name);
  const [accountId, setAccountId] = useState<string>(props.user.account_id);
  const [description, setDescription] = useState<string>(props.user.description || "")
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePrivacyChange = (value: string) => {
    setPrivacy(value);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setSelectedImage(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(DefaultUserIcon.src);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.put("http://localhost:3000/update-profile", {
        profile_image_path: selectedImage,
        user_name: name,
        account_id: accountId,
        description,
        is_public: privacy === "true"
      });
      console.log("プロフィール更新成功", response.data);
      setOpen(false);
    } catch (error) {
      console.error("プロフィール更新エラー", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white gap-4 py-5">
          <p className="text-base">編集</p>
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-lg">プロフィールを編集</DialogTitle>
        </DialogHeader>
        <div className="space-y-8 py-6">
          <div className="flex justify-center">
            <div className="relative">
              <Avatar className="h-24 w-24 border-2">
                <AvatarImage
                  src={selectedImage}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                <AvatarFallback>写真</AvatarFallback>
              </Avatar>
              {selectedImage !== DefaultUserIcon.src && 
                <Button
                  onClick={removeImage}
                  className="absolute -top-6 -right-30 bg-transparent shadow-none text-xs text-red-500"
                >
                  <p>写真を削除</p>
                </Button>
              }
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
          <div className="space-y-3">
            <Label htmlFor="name">ユーザー名</Label>
            <Input 
              id="name" 
              defaultValue={props.user.user_name} 
              className="w-full"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="account_id">アカウントID</Label>
            <Input 
              id="account_id"
              defaultValue={props.user.account_id}
              className="w-full"
              onChange={(e) => setAccountId(e.target.value)}
            />
          </div>
          <div>
            <Label>公開設定</Label>
            <RadioGroup 
              value={privacy} 
              onValueChange={handlePrivacyChange} 
              className="flex space-x-4"
            >
              <div className="flex items-center">
                <RadioGroupItem value="true" id="is_public" />
                <Label htmlFor="is_public" className="font-normal text-gray-700 px-3 py-4">
                  公開
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="false" id="is_private" />
                <Label htmlFor="is_private" className="font-normal text-gray-700 px-3 py-4">
                  非公開
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-3">
            <Label htmlFor="description">自己紹介</Label>
            <Textarea
              id="description"
              placeholder="プロフィールに自己紹介を追加する"
              defaultValue={props.user.description}
              className="w-full min-h-[100px]"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
            >
              キャンセル
            </Button>
            <Button
              onClick={handleSave}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              保存
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

type ProfileEditProps = {
  user: User;
}