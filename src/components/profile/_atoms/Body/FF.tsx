import { User } from "@/app/profile/page";

export default function FF(props: FFProps) {
  return (
    <div className="flex mt-2 space-x-4 text-sm">
      <div>
        <span className="font-semibold">{props.user.follower}</span> <span className="text-gray-500">フォロワー</span>
      </div>
      <div>
        <span className="font-semibold">{props.user.follow}</span> <span className="text-gray-500">フォロー中</span>
      </div>
    </div>
  );
};

type FFProps = {
  user: User;
}