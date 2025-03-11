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

export default function FollowersPage() {
  const followers: FFReration[] = [
    {
      id: 1,
      ProfileImagePath: "/placeholder.svg?height=60&width=60",
      name: "清澄",
      account_id: "@kiyoya_1106",
      description: "深層学習｜外部院試｜デジタルツイン｜最適化｜React/Go",
    },
    {
      id: 2,
      ProfileImagePath: "/placeholder.svg?height=60&width=60",
      name: "k",
      account_id: "@k8035004287922",
      description: "web、AI 勉強中大学3年生📖低学歴だけど一生懸命頑張る🔥",
    },
    {
      id: 3,
      ProfileImagePath: "/placeholder.svg?height=60&width=60",
      name: "こばやす",
      account_id: "@yzdrruQ9EqPT3bq",
      description: "株式会社LASSICの小林です。リモートワークといえば『Remoguリモグ』を広めたい。IT業界の事をもっと知りたくて質問ポストたくさんしてます☁️エンジニアのみなさんいろいろ教えてください🐼ゲーム大好き。",
    },
    {
      id: 4,
      ProfileImagePath: "/placeholder.svg?height=60&width=60",
      name: "なつ@ママが在宅副業で…",
      account_id: "@wr0FpdVbQx26325",
      description: "副業したい子育て世代を応援｜元20代社畜｜自宅にいながら稼ぎたい！！|X運用開始2ヶ月で10万の収益｜人生一度きり、やるしかない！副収入得るぞ🔥",
    },
    {
      id: 5,
      ProfileImagePath: "/placeholder.svg?height=60&width=60",
      name: "愛の顔面ストレート",
      account_id: "@loveface123",
      description: "毎日をポジティブに生きる｜写真好き｜旅行｜美味しいもの",
    }
  ]

  const followings: FFReration[] = [
    {
      id: 1,
      ProfileImagePath: "/placeholder.svg?height=60&width=60",
      name: "清澄",
      account_id: "@kiyoya_1106",
      description: "深層学習｜外部院試｜デジタルツイン｜最適化｜React/Go",
    },
    {
      id: 2,
      ProfileImagePath: "/placeholder.svg?height=60&width=60",
      name: "k",
      account_id: "@k8035004287922",
      description: "web、AI 勉強中大学3年生📖低学歴だけど一生懸命頑張る🔥",
    },
    {
      id: 5,
      ProfileImagePath: "/placeholder.svg?height=60&width=60",
      name: "愛の顔面ストレート",
      account_id: "@loveface123",
      description: "毎日をポジティブに生きる｜写真好き｜旅行｜美味しいもの",
    }
  ]

  const searchParams = useSearchParams();
  const name = searchParams.get("name");

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