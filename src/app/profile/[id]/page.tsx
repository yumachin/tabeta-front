"use client";

import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

import Footer from '@/components/Home/_organisms/Footer/Footer';
import Header from "@/components/profile/_molecules/Header/Header";
import Posts from '@/components/profile/_organisms/Body/Posts';
import Profile from '@/components/profile/_organisms/Body/Profile';
import { checkIfFollowing, followingUser, unFollowingUser } from "@/utils/api/function/api";
import { getIndividualPosts } from "@/utils/api/posts/get/api";
import { getUserProfile } from "@/utils/api/users/api";

// import PullUpLogo from "../../../../public/pullup.png";

export default function Page(props: PageProps) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const propsParams = use(props.params);
  const target_user_id = Number(propsParams.id);
  const [isFollowing, setIsFollowing] = useState<boolean | null>(null);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  useEffect(() => {
    const fetchFollowStatus = async () => {
      try {
        const user_id = Number(localStorage.getItem("user_id"));
        const session_id = localStorage.getItem("session_id");

        if (!user_id || !session_id) {
          console.error("認証されていません");
          setLoading(false);
          router.push("/auth/sign-in");
          return;
        }

        const result = await checkIfFollowing(target_user_id, user_id, session_id);
        console.log("result[0] は", result[0]);
        if (result[0].follow_status === 1) {
          setIsFollowing(true);
        } else if (result[0].follow_status === 0) {
          setIsFollowing(false);
        } else {
          setIsFollowing(null);
        }
        setLoading(false);
      } catch (error) {
        console.error("フォロー状態の取得に失敗しました", error);
      }
    };
    fetchFollowStatus();
  }, [router, target_user_id, refreshKey]);

  useEffect(() => {
    const fetchOthersProfileData = async () => {
      try {
        const user_id = Number(localStorage.getItem("user_id"));
        const session_id = localStorage.getItem("session_id");

        if (!user_id || !session_id) {
          console.error("認証されていません");
          setLoading(false);
          router.push("/auth/sign-in");
          return;
        }

        const userData = await getUserProfile(target_user_id, user_id, session_id);
        console.log("aaa", userData)
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error("他のユーザーのプロフィールの取得に失敗しました", error);
      }
    };
    fetchOthersProfileData();
  }, [router, target_user_id, refreshKey]);

  useEffect(() => {
    const fetchOthersPostsData = async () => {
      try {
        const user_id = Number(localStorage.getItem("user_id"));
        const session_id = localStorage.getItem("session_id");

        if (!user_id || !session_id) {
          console.error("認証されていません");
          setLoading(false);
          router.push("/auth/sign-in");
          return;
        }

        const postsData = await getIndividualPosts(target_user_id, user_id, session_id);
        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error("他のユーザーのポストの取得に失敗しました", error);
      }
    };
    fetchOthersPostsData();
  }, [router, target_user_id, refreshKey]);
  console.log("userは", user)

  // const me: User =
  //   {
  //     id: 6,
  //     Profileimage_path: "/placeholder.svg?height=80&width=80", 
  //     name: "Kiyoya", 
  //     account_id: "kiyoya123",
  //     description: "",
  //     is_public: true, 
  //     follower: 98,
  //     follow: 142
  //   };
  // const user: User =
  //   {
  //     id: 7,
  //     profile_image_path: "/placeholder.svg?height=80&width=80", 
  //     user_name: "Yuma", 
  //     account_id: "yuma5542",
  //     description: "",
  //     is_public: true, 
  //     follower: 150,
  //     follow: 172
  //   };
  // const posts: MyPostType[] = [
  //   {
  //     id: 123,
  //     image_path: PullUpLogo.src, 
  //     created_at: "2025-03-08T12:34:56.789Z", 
  //     time_section: "朝"
  //   },
  //   {
  //     id: 89,
  //     image_path: PullUpLogo.src,
  //     created_at: "2025-03-07T08:34:56.789Z", 
  //     time_section: "晩"
  //   },
  //   {
  //     id: 44,
  //     image_path: PullUpLogo.src,
  //     created_at: "2025-03-05T19:34:56.789Z", 
  //     time_section: "晩"
  //   },
  //   {
  //     id: 10,
  //     image_path: PullUpLogo.src,
  //     created_at: "2025-03-03T12:34:56.789Z", 
  //     time_section: "朝"
  //   }
  // ];

  const handleFollowed = async ({ id, user_id, session_id }: HandlerProps) => {
    setRefreshKey(prev => prev + 1);
    try {
      console.log("とおったよ")
      await followingUser(id, user_id, session_id);
    } catch (error) {
      console.error("フォローに失敗しました", error);
    }
  };

  const handleDeleteFollowed = async ({ id, user_id, session_id }: HandlerProps) => {
    setRefreshKey(prev => prev + 1);
    try {
      console.log("とおったよ２")
      console.log("id", id)
      console.log("user_id", user_id)
      const res = await unFollowingUser(id, user_id, session_id);

      console.log("res", res)
    } catch (error) {
      console.error("フォロー解除に失敗しました", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header id={target_user_id} />
      {loading ? (
        <div className="flex flex-col items-center justify-center h-[70vh] space-y-12">
          <h2 className="text-2xl text-orange-500 font-bold animate-bounce">おいしい情報を料理中...　🍴</h2>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-orange-200 animate-bounce delay-0"></div>
            <div className="w-3 h-3 rounded-full bg-orange-400 animate-bounce delay-150"></div>
            <div className="w-3 h-3 rounded-full bg-orange-600 animate-bounce delay-300"></div>
          </div>
        </div>
        ) : (
          <>
            {user && <Profile user={user[0]} id={target_user_id} isFollowing={isFollowing} handleFollowed={handleFollowed} handleDeleteFollowed={handleDeleteFollowed} />}
            {user && posts && <Posts user={user[0]} posts={posts} />}
          </>
        )
      }
      <Footer />
    </div>
  );
};

type PageProps = {
  params: Promise<RouteParams>;
}

type RouteParams = {
  id: string;
}

export type HandlerProps = {
  id: number;
  user_id: string | null;
  session_id: string | null;
}