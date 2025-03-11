import LikesCount from "@/components/Home/_atoms/Post/LikesCount";
import Buttons from "@/components/Home/_molecules/Post/Buttons";
import UserCommentInf from "@/components/Home/_molecules/Post/UserCommentInf";
import { GetLPPost } from "@/types/types";

export default function PostFooter(props: PostFooterProps) {
  return (
    <div className="mx-2">
      <Buttons />
      <LikesCount likes={props.post.likes} />
      <UserCommentInf post={props.post} />
    </div>
  );
};

type PostFooterProps = {
  post: GetLPPost;
}