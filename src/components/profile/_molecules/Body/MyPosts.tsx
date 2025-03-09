import MyPost from "../../_atoms/Body/MyPost";

import { MyPostType } from "@/types/types";

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