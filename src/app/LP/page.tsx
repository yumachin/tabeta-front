"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import HeaderAndFooter from "@/components/Home/_templates/HeaderAndFooter";
import Post from "@/components/Home/_templates/Post";
import { GetLPPost } from "@/types/types";
import { getAllPosts } from "@/utils/api/posts/get/api";

export default function Page() {
  const [posts, setPosts] = useState<GetLPPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchLPPosts = async () => {
      try {
        const allPosts = await getAllPosts();
        setPosts(allPosts);
        setLoading(false);
      } catch (error) {
        console.error("投稿の取得に失敗しました:", error);
      }
    };
    fetchLPPosts();
  }, [router]);

  // 認証状態の場合、元いたページにリダイレクト
  useEffect(() => {
    const session_id = localStorage.getItem("session_id");
    const user_id = localStorage.getItem("user_id");
    if (session_id || user_id) {
      window.history.back();
      return;
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  if (isAuthenticated === null) {
    return null;
  }


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
  //       id: 1,
  //       user_name: "こーせいいいいいいい",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: "/placeholder.svg?height=600&width=600",
  //     created_at: "2025-03-05T12:34:56Z",
  //     likes: 10000,
  //     description: "React Native使ったよーって人さｓｓｓvj;wn;eubrv;neqb:eramnber:snbe;です!"
  //   }
  // ];

  return (
    <HeaderAndFooter>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-[70vh] space-y-12">
          <h2 className="text-2xl text-orange-500 font-bold animate-bounce">おいしい投稿を料理中...　🍴</h2>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-orange-200 animate-bounce delay-0"></div>
            <div className="w-3 h-3 rounded-full bg-orange-400 animate-bounce delay-150"></div>
            <div className="w-3 h-3 rounded-full bg-orange-600 animate-bounce delay-300"></div>
          </div>
        </div>
        ) : <Post posts={posts} />
      }
    </HeaderAndFooter>
  );
};