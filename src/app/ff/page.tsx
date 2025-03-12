"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import FF from "@/components/ff/_templates/FF";
import HeaderAndFooter from "@/components/Home/_templates/HeaderAndFooter";
import { getFollowers, getFollowings } from "@/utils/api/users/api";

export default function Page() {
  const router = useRouter();
  const [followers, setFollowers] = useState(null);
  const [followings, setFollowings] = useState(null);
  const sliderRef = useRef<Slider | null>(null);
  const [buttonState, setButtonState] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  useEffect(() => {
    const fetchFFData = async () => {
      try {
        const user_id = Number(localStorage.getItem("user_id"));
        const session_id = localStorage.getItem("session_id");

        if (!user_id || !session_id) {
          console.error("認証されていません");
          setLoading(false);
          router.push("/auth/sign-in");
          return;
        }
        if (!name || !id) {
          console.error("URLにパラメーターが入っていません");
          router.push("/auth/sign-in");
          return;
        }

        const followersData = await getFollowers(user_id, session_id);
        const followingsData = await getFollowings(user_id, session_id);

        setFollowers(followersData);
        setFollowings(followingsData);
        setLoading(false);
      } catch (error) {
        console.error("FFの取得に失敗しました:", error);
      }
    };
    fetchFFData();
  }, [router, id, name]);

  // const followers: FFReration[] = [
  //   {
  //     id: 1,
  //     profile_image_path: "/placeholder.svg?height=60&width=60",
  //     name: "きよや",
  //     account_id: "@kiyoya_1106",
  //     description: null,
  //   },
  //   {
  //     id: 2,
  //     profile_image_path: "/placeholder.svg?height=60&width=60",
  //     name: "こーせい",
  //     account_id: "@k8035004287922",
  //     description: "大学3年生",
  //   },
  //   {
  //     id: 3,
  //     profile_image_path: "/placeholder.svg?height=60&width=60",
  //     name: "ゆうま",
  //     account_id: "@yzdrruQ9EqPT3bq",
  //     description: "インターンで勉強した内容をアウトプットしていきたい！最近花粉症のせいで、目も鼻もかゆいです。薬とティッシュが欲しいです。",
  //   },
  //   {
  //     id: 4,
  //     profile_image_path: "/placeholder.svg?height=60&width=60",
  //     name: "けいた",
  //     account_id: "@wr0FpdVbQx26325",
  //     description: "最近は、よく遊びに行ってるよ。",
  //   },
  //   {
  //     id: 5,
  //     profile_image_path: "/placeholder.svg?height=60&width=60",
  //     name: "そうた",
  //     account_id: "@loveface123",
  //     description: "彼女のことが大好きです。もう愛が止まりません。"
  //   }
  // ];
  // const followings: FFReration[] = [
  //   {
  //     id: 1,
  //     profile_image_path: "/placeholder.svg?height=60&width=60",
  //     name: "きよや",
  //     account_id: "@kiyoya_1106",
  //     description: null
  //   },
  //   {
  //     id: 2,
  //     profile_image_path: "/placeholder.svg?height=60&width=60",
  //     name: "こーせい",
  //     account_id: "@k8035004287922",
  //     description: "大学3年生"
  //   },
  //   {
  //     id: 5,
  //     profile_image_path: "/placeholder.svg?height=60&width=60",
  //     name: "そうた",
  //     account_id: "@loveface123",
  //     description: "彼女のことが大好きです。もう愛が止まりません。"
  //   }
  // ];

  return (
    <>
      <HeaderAndFooter 
        onNext={() => sliderRef.current?.slickNext()} 
        onPrev={() => sliderRef.current?.slickPrev()} 
        buttonState={buttonState} 
        setButtonState={setButtonState} 
        name={name}
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center h-[70vh] space-y-12">
            <h2 className="text-2xl text-orange-500 font-bold animate-bounce">おいしい情報を料理中...　🍴</h2>
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-orange-200 animate-bounce delay-0"></div>
              <div className="w-3 h-3 rounded-full bg-orange-400 animate-bounce delay-150"></div>
              <div className="w-3 h-3 rounded-full bg-orange-600 animate-bounce delay-300"></div>
            </div>
          </div>
         ) : followers && followings && <FF followers={followers} followings={followings} ref={sliderRef} setButtonState={setButtonState} />
        }
      </HeaderAndFooter>
    </>
  );
};