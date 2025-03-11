import { UserPlus, UserCheck } from "lucide-react";

export default function FFButton(props: FFButton) {
  return (
    <div className="flex mt-4">
      {props.isFollowing ? (
        <button 
          className="flex flex-1 justify-center gap-2 px-4 py-2 font-medium text-center border text-orange-500 bg-white rounded-md hover:border-red-400"
          onClick={props.handleFollowed}
        >
          <UserCheck />
          <p>フォロー中</p>
        </button>
      ) : (
        <button 
          className="flex flex-1 justify-center gap-2 px-4 py-2 font-medium text-center text-white bg-orange-500 rounded-md hover:bg-orange-600"
          onClick={props.handleDeleteFollowed}
        >
          <UserPlus />
          <p>フォローする</p>
        </button>
      )}
    </div>
  );
};

type FFButton = {
  isFollowing?: boolean | null;
  handleFollowed?: () => void;
  handleDeleteFollowed?: () => void;
}