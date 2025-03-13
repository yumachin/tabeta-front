import Image from 'next/image';
import Link from 'next/link';

import { PostedUserInfType } from '@/types/types';

import Time from '../../_atoms/Post/Time';
import UserName from '../../_atoms/Post/UserName';

export default function PostedUserInf(props: PostedUserInfProps) {
  const redirectUrl = props.pathname === "/LP" ? 
  "/auth/sign-in" : `/profile/${props.postUserInf.id}`;

  console.log("props", props);

  return (
    <div className="flex items-center mb-3">
      <Link href={redirectUrl}>
        <Image
          src="placeholder.svg?height=40&width=40"
          width={40}
          height={40}
          alt=""
          className="rounded-full border-1"
        />
      </Link>
      <div className="ml-3">
        <Link href={redirectUrl}>
          <UserName name={props.postUserInf.user_name} />
        </Link>
        <Time created_at={props.created_at} />
      </div>
    </div>
  );
};

type PostedUserInfProps = {
  postUserInf: PostedUserInfType;
  created_at: string;
  pathname?: string;
}