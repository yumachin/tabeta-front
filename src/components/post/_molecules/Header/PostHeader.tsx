"use client";

import { Button } from "@/components/ui/button";

import Title from "../../_atoms/Header/Title";

export default function PostHeader(props: PostHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Button className="bg-transparent shadow-none text-gray-500 px-1" onClick={() => window.history.back()} >
          キャンセル
        </Button>
        <Title />
        <Button onClick={props.onSubmit} className="text-md bg-orange-500 hover:bg-orange-600">
          シェア
        </Button>
      </div>
    </header>
  );
};

type PostHeaderProps = {
  onSubmit: () => void;
}