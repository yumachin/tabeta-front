"use client";

import { UserPlus, UserCheck } from "lucide-react";
import { useEffect, useState } from "react";

import { HandlerProps } from "@/app/profile/[id]/page";

import { TmpUser } from "../../_organisms/Body/Profile";

export default function FFButton(props: FFButton) {
  const [user_id, setUser_id] = useState<string | null>(null);
  const [session_id, setSession_id] = useState<string | null>(null);

  useEffect(() => {
    setUser_id(localStorage.getItem("user_id"));
    setSession_id(localStorage.getItem("session_id"));
  }, []);

  console.log("user_idは", user_id)
  console.log("session_idは", session_id)

  return (
    <div className="flex mt-4">
      {props.isFollowing ? (
        <button 
          className="flex flex-1 justify-center gap-2 px-4 py-2 font-medium text-center border text-orange-500 bg-white rounded-md hover:border-red-400"
          onClick={() => props.handleDeleteFollowed?.({id: props.user.user_id, user_id, session_id })}
        >
          <UserCheck />
          <p>フォロー中</p>
        </button>
      ) : (
        <button 
          className="flex flex-1 justify-center gap-2 px-4 py-2 font-medium text-center text-white bg-orange-500 rounded-md hover:bg-orange-600"
          onClick={() => props.handleFollowed?.({id: props.user.user_id, user_id, session_id })}
        >
          <UserPlus />
          <p>フォローする</p>
        </button>
      )}
    </div>
  );
};

type FFButton = {
  user: TmpUser;
  isFollowing?: boolean | null;
  handleFollowed?: (handlerProps: HandlerProps) => void; 
  handleDeleteFollowed?: (handlerProps: HandlerProps) => void ;
}