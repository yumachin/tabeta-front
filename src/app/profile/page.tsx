"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Footer from "@/components/Home/_organisms/Footer/Footer";
import Header from "@/components/profile/_molecules/Header/Header";
import Posts from "@/components/profile/_organisms/Body/Posts";
import Profile from "@/components/profile/_organisms/Body/Profile";
// import { MyPostType, User } from "@/types/types";
import { getIndividualPosts } from "@/utils/api/posts/get/api";
import { getUserProfile } from "@/utils/api/users/api";

// import DefaultUserIcon from "../../../public/DefaultUserIcon.png";
// import PullUpLogo from "../../../public/pullup.png";

export default function Page() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const user_id = Number(localStorage.getItem("user_id"));
        const session_id = localStorage.getItem("session_id");

        if (!user_id || !session_id) {
          console.error("認証されていません");
          const errorToast = toast.error("認証状態を確認できません");
          setTimeout(() => {
            setLoading(false);
            toast.dismiss(errorToast);
            router.push("/auth/sign-in");
          }, 2000);
        }

        const userData = await getUserProfile(user_id, user_id, session_id);
        const userPosts = await getIndividualPosts(user_id, user_id, session_id);

        setUser(userData);
        setPosts(userPosts);
        setLoading(false);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      }
    };
    fetchProfileData();
  }, [router]);

  // const user: User =
  //   {
  //     id: 6,
  //     // デフォルトの写真がこれ
  //     profile_image_path: DefaultUserIcon.src, 
  //     user_name: "Kiyoya", 
  //     account_id: "kiyoya123",
  //     description: "",
  //     email: "kiyoya@gmail.com",
  //     is_public: "1", 
  //     follower: 98,
  //     follow: 142
  //   };

  // const posts: MyPostType[] = [
  //   {
  //     id: 10,
  //     image_path: PullUpLogo.src, 
  //     created_at: "2025-03-06T12:34:56.789Z", 
  //     time_section: "昼"
  //   },
  //   {
  //     id: 9,
  //     image_path: PullUpLogo.src,
  //     created_at: "2025-03-06T08:34:56.789Z", 
  //     time_section: "朝"
  //   },
  //   {
  //     id: 8,
  //     image_path: PullUpLogo.src,
  //     created_at: "2025-03-05T19:34:56.789Z", 
  //     time_section: "晩"
  //   },
  //   {
  //     id: 7,
  //     image_path: PullUpLogo.src,
  //     created_at: "2025-03-05T12:34:56.789Z", 
  //     time_section: "昼"
  //   }
  // ];

  return (
    <>
      <Toaster />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
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
            {user && <Profile user={user[0]} />}
            {posts && <Posts posts={posts} />}
          </>
        )}
        <Footer />
      </div>
    </>
  );
};