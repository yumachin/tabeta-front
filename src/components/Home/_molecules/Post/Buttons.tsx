import CommentButton from "../../_atoms/Post/CommentButton";
import LikeButton from "../../_atoms/Post/LikeButton";
import ShareButton from "../../_atoms/Post/ShareButton";

export default function Buttons() {
  return (
    <div className="flex items-center justify-between mt-3">
      <div className="flex items-center space-x-4">
        <LikeButton />
        <CommentButton />
      </div>
      <ShareButton />
    </div>
  );
};