import Comments from "@/components/Home/_atoms/Post/Comments";
import { GetLPPost } from "@/types/types";

export default function UserCommentInf(props: UserCommentInfProps) {
  return (
    <div className="flex mt-2 text-sm flex-wrap items-center gap-x-3 max-h-[4.5rem] overflow-y-auto">
      {!(props.post.description === null) && <p className="font-medium">{props.post.post_user_inf.user_name}</p>}
      <Comments description={props.post.description ?? ""} />
    </div>
  );
};

type UserCommentInfProps = {
  post: GetLPPost;
}