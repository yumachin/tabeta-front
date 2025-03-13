"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil, Camera } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { UpdateProfileType, User } from "@/types/types";
import { updateProfile } from "@/utils/api/function/api";
import { updateProfileValidation } from "@/utils/validationSchema";

import DefaultUserIcon from "../../../../public/DefaultUserIcon.png";

export function ProfileEdit(props: ProfileEditProps) {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm<UpdateProfileType>({
      mode: 'onChange',
      resolver: zodResolver(updateProfileValidation)
    });
  const [selectedImage, setSelectedImage] = useState<string>(props.user.profile_image_path);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const user_id = Number(localStorage.getItem("user_id"));
    const session_id = localStorage.getItem("session_id");
    if (user_id && session_id) {
      setUserId(user_id);
      setSessionId(session_id);
    } else {
      console.error("認証されていません");
      router.push("/auth/sign-in");
    }
  }, [router]);

  const formSubmit: SubmitHandler<UpdateProfileType> = async (formData) => {
    const addedFormData = {...formData, userId};
    const postData = new FormData();
    postData.append("json_data", JSON.stringify(addedFormData));
    postData.append("photo", selectedImage);
    const loadingToast = toast.loading("投稿中...");

    try {
      await updateProfile(postData, sessionId);
      toast.success("投稿しました！", { id: loadingToast });
      setTimeout(() => {
        toast.dismiss(loadingToast);
        setOpen(false);
      }, 1000);
    } catch (error) {
      toast.error("プロフィールの更新に失敗しました。",  { id: loadingToast });
      console.error("プロフィールの更新に失敗しました:", error);
      setOpen(false);
    }
  }

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

  return (
    <>
      <Toaster />
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
          <form onSubmit={handleSubmit(formSubmit)}>
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
                <Label htmlFor="user_name">ユーザー名</Label>
                <Controller
                  control={control}
                  name="user_name"
                  defaultValue={props.user.user_name} 
                  render={({ field }) => (
                    <Input id="user_name" type="text" className="w-full" {...field} />
                  )}
                />
                {errors.user_name && <p className="text-red-500 text-xs">{errors.user_name.message}</p>}
              </div>
              <div className="space-y-3">
                <Label htmlFor="account_id">アカウントID</Label>
                <Controller
                  control={control}
                  name="account_id"
                  defaultValue={props.user.account_id} 
                  render={({ field }) => (
                    <Input id="account_id" type="text" className="w-full" {...field} />
                  )}
                />
                {errors.account_id && <p className="text-red-500 text-xs">{errors.account_id.message}</p>}
              </div>
              <div className="space-y-3">
                <Label htmlFor="email">メールアドレス</Label>
                <Controller
                  control={control}
                  name="email"
                  defaultValue={props.user.email} 
                  render={({ field }) => (
                    <Input id="email" type="text" className="w-full" {...field} />
                  )}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>
              <div className="space-y-3">
                <Label>公開設定</Label>
                <Controller
                  control={control}
                  name="is_public"
                  defaultValue={props.user.is_public}
                  render={({ field }) => (
                    <RadioGroup value={field.value?.toString()} onValueChange={(val) => field.onChange(val)} className="flex space-x-4">
                      <div className="flex items-center">
                        <RadioGroupItem value="1" id="is_public" />
                        <Label htmlFor="is_public" className="font-normal text-gray-700 px-3 py-4">
                          公開
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <RadioGroupItem value="0" id="is_private" />
                        <Label htmlFor="is_private" className="font-normal text-gray-700 px-3 py-4">
                          非公開
                        </Label>
                      </div>
                    </RadioGroup>
                  )}
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="description">自己紹介</Label>
                <Controller
                  control={control}
                  name="description"
                  defaultValue={props.user.description} 
                  render={({ field }) => (
                    <Textarea 
                      id="description"
                      placeholder="プロフィールに自己紹介を追加する"
                      className="w-full min-h-[100px]" 
                      {...field} 
                    />
                  )}
                />
                {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  キャンセル
                </Button>
                <Button
                  onClick={handleSubmit(formSubmit)}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  保存
                </Button>
              </div>

            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

type ProfileEditProps = {
  user: User;
}