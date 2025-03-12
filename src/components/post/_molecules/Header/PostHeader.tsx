"use client";

import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import Title from "../../_atoms/Header/Title";

export default function PostHeader(props: PostHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 px-2">
        <Button className="bg-transparent shadow-none text-gray-500 px-1" onClick={() => window.history.back()}>
          {pathname.startsWith("/edit") ? <ArrowLeft className="bg-transparent shadow-none text-black" /> : <p>キャンセル</p>}
        </Button>
        <Title />
        {pathname === "/post" ? 
          <Button onClick={props.onSubmit} className="text-lg bg-orange-500 hover:bg-orange-600">シェア</Button> :
          <div className="w-14 h-14"></div>
        }
      </div>
    </header>
  );
};

type PostHeaderProps = {
  onSubmit?: () => void;
}