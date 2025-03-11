"use client";

// import axios from "axios";
import { use, useEffect, useState } from "react";

import PullUpLogo from "../../../../public/pullup.png";

import Footer from '@/components/Home/_organisms/Footer/Footer';
import Header from "@/components/profile/_molecules/Header/Header";
import Posts from '@/components/profile/_organisms/Body/Posts';
import Profile from '@/components/profile/_organisms/Body/Profile';
import { MyPostType, User } from '@/types/types';

export default function Page(props: PageProps) {
  const propsParams = use(props.params);
  const target_user_id = propsParams.id;

  // 現在ログイン中のユーザー情報を取得
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

  const [isFollowing, setIsFollowing] = useState<boolean | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    console.log("発火しました。");
    const fetchFollowStatus = async () => {
      // try {
      //   const res = await axios.post("http://localhost:3001/follow_status", {
      //     // 現在ログイン中のユーザーのID
      //     // login_user_id: login_user_id,
      //     target_user_id: target_user_id
      //   });
      //   setIsFollowing(res.data.status === "Followed");
      setIsFollowing(true);
      // } catch (error) {
      //   console.error("フォロー状態の取得に失敗しました", error);
      // }
    };
    fetchFollowStatus();
  }, [target_user_id, refreshKey]);

  // props.params.id を元にユーザーを取得
  const user: User =
    {
      id: 7,
      profile_image_path: "/placeholder.svg?height=80&width=80", 
      name: "Yuma", 
      account_id: "yuma5542",
      description: "",
      is_public: true, 
      follower: 150,
      follow: 172
    };

  // props.params.id を元にそのユーザーの投稿を取得
  const posts: MyPostType[] = [
    {
      id: 123,
      image_path: PullUpLogo.src, 
      created_at: "2025-03-08T12:34:56.789Z", 
      time_section: "朝"
    },
    {
      id: 89,
      image_path: PullUpLogo.src,
      created_at: "2025-03-07T08:34:56.789Z", 
      time_section: "晩"
    },
    {
      id: 44,
      image_path: PullUpLogo.src,
      created_at: "2025-03-05T19:34:56.789Z", 
      time_section: "晩"
    },
    {
      id: 10,
      image_path: PullUpLogo.src,
      created_at: "2025-03-03T12:34:56.789Z", 
      time_section: "朝"
    }
  ];

  const handleFollowed = async () => {
    setRefreshKey(prev => prev + 1);
    // try {
    //   await axios.post("http://localhost:3001/follow", {
    //     // 現在ログイン中のユーザーのID
    //     // login_user_id: login_user_id,
    //     target_user_id: target_user_id
    //   });
    // } catch (error) {
    //   console.error("フォローに失敗しました", error);
    // }
  };

  const handleDeleteFollowed = async () => {
    setRefreshKey(prev => prev + 1);
    // try {
    //   await axios.delete("http://localhost:3001/follow", {
    //     data: {
    //       // 現在ログイン中のユーザーのID
    //       // login_user_id: login_user_id,
    //       target_user_id: target_user_id
    //     }
    //   });
    // } catch (error) {
    //   console.error("フォロー解除に失敗しました", error);
    // }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header id={target_user_id} />
      <Profile user={user} id={target_user_id} isFollowing={isFollowing} handleFollowed={handleFollowed} handleDeleteFollowed={handleDeleteFollowed} />
      <Posts posts={posts} />
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