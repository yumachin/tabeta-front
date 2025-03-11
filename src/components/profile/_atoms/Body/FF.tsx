"use client";

import { useRouter } from "next/navigation";

import { User } from "@/types/types";

export default function FF(props: FFProps) {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(`/ff?id=${props.user.id}&name=${props.user.user_name}`);
  };
  
  return (
    <div className="flex mt-2 space-x-4 text-sm">
      <div onClick={handleNavigation}>
        <span className="font-semibold">{props.user.follower}</span> <span className="text-gray-500">フォロワー</span>
      </div>
      <div onClick={handleNavigation}>
        <span className="font-semibold">{props.user.follow}</span> <span className="text-gray-500">フォロー中</span>
      </div>
    </div>
  );
};

type FFProps = {
  user: User;
}