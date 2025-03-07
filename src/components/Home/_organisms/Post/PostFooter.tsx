import LikesCount from "@/components/Home/_atoms/Post/LikesCount";
import Buttons from "@/components/Home/_molecules/Post/Buttons";
import UserCommentInf from "@/components/Home/_molecules/Post/UserCommentInf";

export default function PostFooter() {
  return (
    <>
      <Buttons />
      <LikesCount />
      <UserCommentInf />
    </>
  );
};