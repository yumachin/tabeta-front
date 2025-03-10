import LikesCount from "@/components/Home/_atoms/Post/LikesCount";
import Buttons from "@/components/Home/_molecules/Post/Buttons";
import UserCommentInf from "@/components/Home/_molecules/Post/UserCommentInf";
import { GetLPPost } from "@/types/types";

export default function PostFooter(props: PostFooterProps) {
  return (
    <>
      <Buttons />
      <LikesCount likes={props.post.likes} />
      <UserCommentInf post={props.post} />
    </>
  );
};

type PostFooterProps = {
  post: GetLPPost;
}