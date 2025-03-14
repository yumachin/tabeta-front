"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { PostedUserInfType } from '@/types/types';

import Time from '../../_atoms/Post/Time';
import UserName from '../../_atoms/Post/UserName';

export default function PostedUserInf(props: PostedUserInfProps) {
  const [user_id, setUser_id] = useState<number | null>(null);

  useEffect(() => {
    const userId = Number(localStorage.getItem("user_id"));
    if (userId) {
      setUser_id(userId);
    }
  }, []);

  const imageUrl = `https://160.251.136.146/storage/${props.post_user_inf.profile_image_path}`;
  const redirectUrl = props.pathname === "/LP" ? 
  "/auth/sign-in" : (props.post_user_inf.user_id === user_id) ? "/profile" :`/profile/${props.post_user_inf.user_id}`;

  return (
    <div className="flex items-center mb-3">
      <Link href={redirectUrl}>
        <Image
          src={imageUrl}
          width={40}
          height={40}
          alt=""
          className="object-cover w-full h-full rounded-full aspect-square"
        />
      </Link>
      <div className="ml-3">
        <Link href={redirectUrl}>
          <UserName name={props.post_user_inf.user_name} />
        </Link>
        <Time created_at={props.created_at} />
      </div>
    </div>
  );
};

type PostedUserInfProps = {
  post_user_inf: PostedUserInfType;
  created_at: string;
  pathname?: string;
}