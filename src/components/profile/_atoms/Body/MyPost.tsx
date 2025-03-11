import { Sunrise, Sun, MoonStar } from 'lucide-react';
import Image from "next/image";

import { MyPostType } from "@/types/types";

export default function MyPost(props: MyPostProps) {
  return (
    <div className="relative aspect-square overflow-hidden">
      <div className="flex items-center absolute top-0 left-0 bg-white text-black text-sm px-2 py-1 border border-slate-500 space-x-2">
        <p>{new Date(props.post.created_at).getMonth()+1}/{new Date(props.post.created_at).getDay()}</p>
        {props.post.time_section === "朝" ? 
          <Sunrise className="w-4 h-4 text-orange-300" />
        : props.post.time_section === "昼" ? 
          <Sun className="w-4 h-4 text-red-700"/> 
        : <MoonStar className="w-4 h-4 text-blue-600"/>}
      </div>
      <Image
        src={props.post.image_path}
        width={300}
        height={300}
        alt={`Post${props.post.id}`}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

type MyPostProps = {
  post: MyPostType;
}