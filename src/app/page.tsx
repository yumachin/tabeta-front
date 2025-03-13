"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import HeaderAndFooter from "@/components/Home/_templates/HeaderAndFooter";
import Post from "@/components/Home/_templates/Post";
import { GetLPPost } from "@/types/types";
import { getAllPosts, getFollowedAllPosts } from "@/utils/api/posts/get/api";

export default function Page() {
  const [posts, setPosts] = useState<GetLPPost[]>([]);
  const [followedPosts, setFollowedPosts] = useState<GetLPPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const sliderRef = useRef<Slider | null>(null);
  const [buttonState, setButtonState] = useState<number>(0);

  useEffect(() => {
    const fetchHomePosts = async () => {
      try {
        const user_id = Number(localStorage.getItem("user_id"));
        const session_id = localStorage.getItem("session_id");

        if (!user_id || !session_id) {
          console.error("認証されていません");
          setLoading(false);
          router.push("/LP");
          return;
        }

        const allPosts = await getAllPosts();
        const folledAllPosts = await getFollowedAllPosts(user_id, session_id);

        setPosts(allPosts);
        setFollowedPosts(folledAllPosts);
        setLoading(false);
      } catch (error) {
        console.error("投稿の取得に失敗しました:", error);
      }
    };
    fetchHomePosts();
  }, [router]);

  // const posts: GetLPPost[] = [
  //   {
  //     id: 1000,
  //     post_user_inf: {
  //       id: 1,
  //       user_name: "ゆまちん",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: "/placeholder.svg?height=600&width=600",
  //     created_at: "2025-03-09T12:34:56Z",
  //     likes: 114514,
  //     description: null
  //   },
  //   {
  //     id: 999,
  //     post_user_inf: {
  //       id: 2,
  //       user_name: "きよさん",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: "/placeholder.svg?height=600&width=600",
  //     created_at: "2025-03-07T12:34:56Z",
  //     likes: 4545,
  //     description: "牡蠣を食べました！"
  //   },
  //   {
  //     id: 998,
  //     post_user_inf: {
  //       id: 3,
  //       user_name: "こーせいいいいいいい",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: "/placeholder.svg?height=600&width=600",
  //     created_at: "2025-03-05T12:34:56Z",
  //     likes: 10000,
  //     description: "React Native使ったよーって人さｓｓｓvj;wn;eubrv;neqb:eramnber:snbe;です!"
  //   },
  //   {
  //     id: 997,
  //     post_user_inf: {
  //       id: 4,
  //       user_name: "こーせいいいいいいい",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: "/placeholder.svg?height=600&width=600",
  //     created_at: "2025-03-05T12:34:56Z",
  //     likes: 10000,
  //     description: "React Native使ったよーって人さｓｓｓvj;wn;eubrv;neqb:eramnber:snbe;です!"
  //   }
  // ];
  // const followedPosts: GetLPPost[] = [
  //   {
  //     id: 923,
  //     post_user_inf: {
  //       id: 5,
  //       user_name: "俺がフォローしてる人➀",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: "/placeholder.svg?height=600&width=600",
  //     created_at: "2025-03-08T12:34:56Z",
  //     likes: 100,
  //     description: "おおおお"
  //   },
  //   {
  //     id: 519,
  //     post_user_inf: {
  //       id: 6,
  //       user_name: "俺がフォローしてる人➁",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: "/placeholder.svg?height=600&width=600",
  //     created_at: "2025-03-04T12:34:56Z",
  //     likes: 200,
  //     description: "おあｄｈｓぃ"
  //   },
  //   {
  //     id: 325,
  //     post_user_inf: {
  //       id: 7,
  //       user_name: "俺がフォローしてる人➂",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: "/placeholder.svg?height=600&width=600",
  //     created_at: "2025-03-02T12:34:56Z",
  //     likes: 300,
  //     description: "おおお"
  //   }
  // ];

  return (
    <HeaderAndFooter onNext={() => sliderRef.current?.slickNext()} onPrev={() => sliderRef.current?.slickPrev()} buttonState={buttonState} setButtonState={setButtonState} >
      {loading ? (
        <div className="flex flex-col items-center justify-center h-[70vh] space-y-12">
          <h2 className="text-2xl text-orange-500 font-bold animate-bounce">おいしい投稿を料理中...　🍴</h2>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-orange-200 animate-bounce delay-0"></div>
            <div className="w-3 h-3 rounded-full bg-orange-400 animate-bounce delay-150"></div>
            <div className="w-3 h-3 rounded-full bg-orange-600 animate-bounce delay-300"></div>
          </div>
        </div>
       ) : <Post posts={posts} followedPosts={followedPosts} ref={sliderRef} setButtonState={setButtonState} />
      }
    </HeaderAndFooter>
  );
};