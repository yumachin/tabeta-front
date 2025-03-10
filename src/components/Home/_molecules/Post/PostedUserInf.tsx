import Image from 'next/image';

import { PostedUserInfType } from '@/types/types';

import Time from '../../_atoms/Post/Time';
import UserName from '../../_atoms/Post/UserName';

export default function PostedUserInf(props: PostedUserInfProps) {
  return (
    <div className="flex items-center mb-3">
      <Image
        src={props.postUserInf.profile_image_path}
        width={40}
        height={40}
        alt=""
        className="rounded-full"
      />
      <div className="ml-3">
        <UserName name={props.postUserInf.user_name} />
        <Time created_at={props.created_at} />
      </div>
    </div>
  );
};

type PostedUserInfProps = {
  postUserInf: PostedUserInfType;
  created_at: string;
}