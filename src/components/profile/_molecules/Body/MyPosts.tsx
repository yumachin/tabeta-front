import { MyPostType } from "@/types/types";

import MyPost from "../../_atoms/Body/MyPost";

export default function MyPosts(props: MyPostsProps) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {props.posts.map((post: MyPostType, index: number) => (
        <MyPost key={index} post={post} />
      ))}
    </div>
  );
};

type MyPostsProps = {
  posts: MyPostType[];
}