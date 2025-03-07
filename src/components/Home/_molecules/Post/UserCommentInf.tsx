import Comments from "@/components/Home/_atoms/Post/Comments";
import Tags from "@/components/Home/_atoms/Post/Tags";
// import UserName from "@/components/Home/_atoms/Post/UserName";

export default function UserCommentInf() {
  return (
    <div className="flex mt-1 text-sm space-x-2">
      {/* <UserName /> */}
      <p className="font-medium">kiyoya</p>
      <Comments />
      <Tags />
    </div>
  );
};