"use client";

// import { ArrowLeft, CheckCircle } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import Slider from "react-slick";

import FF from "@/components/ff/_templates/FF";
import HeaderAndFooter from "@/components/Home/_templates/HeaderAndFooter";
import { FFReration } from "@/types/types";

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  console.log("idは、", id);
  console.log("nameは、", name);

  // id を元に、フォロワーとフォロー中ユーザーを取得
  const followers: FFReration[] = [
    {
      id: 1,
      profile_image_path: "/placeholder.svg?height=60&width=60",
      name: "きよや",
      account_id: "@kiyoya_1106",
      description: null,
    },
    {
      id: 2,
      profile_image_path: "/placeholder.svg?height=60&width=60",
      name: "こーせい",
      account_id: "@k8035004287922",
      description: "大学3年生",
    },
    {
      id: 3,
      profile_image_path: "/placeholder.svg?height=60&width=60",
      name: "ゆうま",
      account_id: "@yzdrruQ9EqPT3bq",
      description: "インターンで勉強した内容をアウトプットしていきたい！最近花粉症のせいで、目も鼻もかゆいです。薬とティッシュが欲しいです。",
    },
    {
      id: 4,
      profile_image_path: "/placeholder.svg?height=60&width=60",
      name: "けいた",
      account_id: "@wr0FpdVbQx26325",
      description: "最近は、よく遊びに行ってるよ。",
    },
    {
      id: 5,
      profile_image_path: "/placeholder.svg?height=60&width=60",
      name: "そうた",
      account_id: "@loveface123",
      description: "彼女のことが大好きです。もう愛が止まりません。"
    }
  ]
  const followings: FFReration[] = [
    {
      id: 1,
      profile_image_path: "/placeholder.svg?height=60&width=60",
      name: "きよや",
      account_id: "@kiyoya_1106",
      description: null,
    },
    {
      id: 2,
      profile_image_path: "/placeholder.svg?height=60&width=60",
      name: "こーせい",
      account_id: "@k8035004287922",
      description: "大学3年生",
    },
    {
      id: 5,
      profile_image_path: "/placeholder.svg?height=60&width=60",
      name: "そうた",
      account_id: "@loveface123",
      description: "彼女のことが大好きです。もう愛が止まりません。",
    }
  ]

  const sliderRef = useRef<Slider | null>(null);
  const [buttonState, setButtonState] = useState<number>(0);

  return (
    <>
      <HeaderAndFooter onNext={() => sliderRef.current?.slickNext()} onPrev={() => sliderRef.current?.slickPrev()} buttonState={buttonState} setButtonState={setButtonState} name={name} >
        <FF followers={followers} followings={followings} ref={sliderRef} setButtonState={setButtonState} />
      </HeaderAndFooter>
    </>
  );
};