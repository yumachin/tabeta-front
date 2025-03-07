import Image from 'next/image';

import Time from '../../_atoms/Post/Time';
import UserName from '../../_atoms/Post/UserName';

export default function PostedUserInf() {
  return (
    <div className="flex items-center mb-3">
      <Image
        src="/placeholder.svg?height=40&width=40"
        width={40}
        height={40}
        alt=""
        className="rounded-full"
      />
      <div className="ml-3">
        <UserName />
        <Time />
      </div>
    </div>
  );
};