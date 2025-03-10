import Comments from "@/components/Home/_atoms/Post/Comments";
import Tags from "@/components/Home/_atoms/Post/Tags";
import { GetLPPost } from "@/types/types";
// import UserName from "@/components/Home/_atoms/Post/UserName";

export default function UserCommentInf(props: UserCommentInfProps) {
  return (
    <div className="flex mt-2 text-sm flex-wrap items-center gap-x-3 max-h-[4.5rem] overflow-y-auto">
      {!(props.post.description === null && props.post.tags.length === 0) && <p className="font-medium">{props.post.postUserInf.user_name}</p>}
      <Comments description={props.post.description ?? ""} />
      <Tags tags={props.post.tags} />
    </div>
  );
};

type UserCommentInfProps = {
  post: GetLPPost;
}