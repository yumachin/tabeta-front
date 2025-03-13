import { Control, Controller, FieldErrors } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PostingType } from "@/types/types";

import FieldPhoto from "../../_atoms/Body/FieldPhoto";

export default function Field(props: FieldProps) {
  return (
    <div className="space-y-8 container px-4 py-6 mx-auto max-w-2xl">
      <div className="space-y-3">
        <Label htmlFor="Image_path">写真</Label>
        <Controller
          control={props.control}
          name="image_path"
          render={({ field }) => <FieldPhoto {...field} />}
        />
        {props.errors.image_path && <p className="text-red-500 text-xs">{props.errors.image_path.message}</p>}
      </div>
      <div className="space-y-3">
        <Label htmlFor="time_section">時間帯</Label>
        <Controller
          control={props.control}
          name="time_section"
          defaultValue="afternoon" 
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange} >
              <SelectTrigger id="time_section" className="w-full py-5">
                <SelectValue placeholder="時間帯を選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="w-full py-4" value="breakfast">
                  朝
                </SelectItem>
                <SelectItem className="w-full py-4" value="lunch">
                  昼
                </SelectItem>
                <SelectItem className="w-full py-4" value="dinner">
                  晩
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {props.errors.time_section && <p className="text-red-500 text-xs">{props.errors.time_section.message}</p>}
      </div>
      <div className="space-y-3">
        <Label>公開設定</Label>
        <Controller
          control={props.control}
          name="is_public"
          defaultValue="1"
          render={({ field }) => (
            <RadioGroup value={field.value?.toString()} onValueChange={(val) => field.onChange(val)} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1" id="is_public" />
                <Label htmlFor="is_public" className="font-normal text-gray-700">
                  公開
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="0" id="is_private" />
                <Label htmlFor="is_private" className="font-normal text-gray-700">
                  非公開
                </Label>
              </div>
            </RadioGroup>
          )}
        />
      </div>
      <div className="space-y-3">
        <Label htmlFor="title">タイトル</Label>
        <Controller
          control={props.control}
          name="title"
          defaultValue=""
          render={({ field }) => (
            <Input id="title" type="text" className="w-full" {...field} />
          )}
        />
        {props.errors.title && <p className="text-red-500 text-xs">{props.errors.title.message}</p>}
      </div>
      <div className="space-y-3">
        <Label htmlFor="description">説明</Label>
        <Controller
          control={props.control}
          name="description"
          render={({ field }) => (
            <Textarea id="description" placeholder="説明を入力" className="w-full min-h-[100px]" {...field} />
          )}
        />
      </div>
      <div className="my-24"></div>
    </div>
  );
};

type FieldProps = {
  control: Control<PostingType>;
  errors: FieldErrors<PostingType>;
}