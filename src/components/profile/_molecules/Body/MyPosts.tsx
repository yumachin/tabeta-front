import Link from "next/link";

import { MyPostType } from "@/types/types";

import MyPost from "../../_atoms/Body/MyPost";

export default function MyPosts(props: MyPostsProps) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {props.posts.map((post: MyPostType, index: number) => (
        <Link href={`/edit/${post.id}`} key={index}>
          <MyPost post={post} />  
        </Link>
      ))}
    </div>
  );
};

type MyPostsProps = {
  posts: MyPostType[];
}