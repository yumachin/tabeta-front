"use client";

import { UserPlus, UserCheck } from "lucide-react";

import { HandlerProps } from "@/app/profile/[id]/page";
import { User } from "@/types/types";

export default function FFButton(props: FFButton) {
  const user_id: string | null = localStorage.getItem("user_id");
  const session_id: string | null = localStorage.getItem("session_id");

  return (
    <div className="flex mt-4">
      {props.isFollowing ? (
        <button 
          className="flex flex-1 justify-center gap-2 px-4 py-2 font-medium text-center border text-orange-500 bg-white rounded-md hover:border-red-400"
          onClick={() => props.handleFollowed?.({id: props.user.id, user_id, session_id })}
        >
          <UserCheck />
          <p>フォロー中</p>
        </button>
      ) : (
        <button 
          className="flex flex-1 justify-center gap-2 px-4 py-2 font-medium text-center text-white bg-orange-500 rounded-md hover:bg-orange-600"
          onClick={() => props.handleDeleteFollowed?.({id: props.user.id, user_id, session_id })}
        >
          <UserPlus />
          <p>フォローする</p>
        </button>
      )}
    </div>
  );
};

type FFButton = {
  user: User;
  isFollowing?: boolean | null;
  handleFollowed?: (handlerProps: HandlerProps) => void; 
  handleDeleteFollowed?: (handlerProps: HandlerProps) => void ;
}