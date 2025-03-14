import { Dispatch, SetStateAction } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { UpdateProfileType } from "@/types/types";

import FieldPhoto2 from "../../_atoms/Body/FieldPhoto2";


export default function Field2(props: FieldProps2) {
  return (
    <div className="space-y-6 py-6">
      <div className="space-y-3">
        <Label htmlFor="Image_path">写真</Label>
        <Controller
          control={props.control}
          name="profile_image_path"
          defaultValue={`http://160.251.136.146/storage/${props.user.profile_image_path}`} 
          render={({ field }) => <FieldPhoto2 {...field} selectedImage={props.selectedImage} setSelectedImage={props.setSelectedImage} />}
        />
        {props.errors.profile_image_path && <p className="text-red-500 text-xs">{props.errors.profile_image_path.message}</p>}
      </div>
      <div className="space-y-3">
        <Label htmlFor="user_name">ユーザー名</Label>
        <Controller
          control={props.control}
          name="user_name"
          defaultValue={props.user.user_name} 
          render={({ field }) => (
            <Input id="user_name" type="text" className="w-full" {...field} />
          )}
        />
        {props.errors.user_name && <p className="text-red-500 text-xs">{props.errors.user_name.message}</p>}
      </div>
      <div className="space-y-3">
        <Label htmlFor="account_id">アカウントID</Label>
        <Controller
          control={props.control}
          name="account_id"
          defaultValue={props.user.account_id} 
          render={({ field }) => (
            <Input id="account_id" type="text" className="w-full" {...field} />
          )}
        />
        {props.errors.account_id && <p className="text-red-500 text-xs">{props.errors.account_id.message}</p>}
      </div>
      <div className="space-y-3">
        <Label htmlFor="email">メールアドレス</Label>
        <Controller
          control={props.control}
          name="email"
          defaultValue={props.user.email} 
          render={({ field }) => (
            <Input id="email" type="text" className="w-full" {...field} />
          )}
        />
        {props.errors.email && <p className="text-red-500 text-xs">{props.errors.email.message}</p>}
      </div>
      <div className="space-y-3">
        <Label>公開設定</Label>
        <Controller
          control={props.control}
          name="is_public"
          defaultValue={String(props.user.is_public)}
          render={({ field }) => (
            <RadioGroup value={field.value?.toString()} onValueChange={(val) => field.onChange(val)} className="flex space-x-4">
              <div className="flex items-center">
                <RadioGroupItem value="1" id="is_public" />
                <Label htmlFor="is_public" className="font-normal text-gray-700 px-3">
                  公開
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="0" id="is_private" />
                <Label htmlFor="is_private" className="font-normal text-gray-700 px-3">
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
          control={props.control}
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
        {props.errors.description && <p className="text-red-500 text-xs">{props.errors.description.message}</p>}
      </div>
      <div className="flex justify-end gap-8 pt-4">
        <button
          className="p-2 border-1 rounded-md"
          onClick={() => props.setOpen(false)}
        >
          キャンセル
        </button>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md font-medium"
        >
          保存
        </button>
      </div>
    </div>
  )
}

type FieldProps2 = {
  control: Control<UpdateProfileType>;
  errors: FieldErrors<UpdateProfileType>;
  user: TmpProfileEditProps;
  selectedImage: string | null;
  setSelectedImage:  Dispatch<SetStateAction<string | null>>;
  setOpen: (value: boolean) => void;
}

type TmpProfileEditProps = {
  profile_image_path: string;
  user_name: string,
  account_id: string;
  email: string;
  is_public: number;
  description?: string;
}