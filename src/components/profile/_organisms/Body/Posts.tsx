import MyPosts from "../../_molecules/Body/MyPosts";

import { MyPostType } from "@/types/types";

export default function Posts(props: PostsProps) {
  return (
    <section className="container px-4 pb-20 mx-auto">
      <div className="pb-2 mb-4 border-b border-gray-200">
        <h2 className="text-lg font-bold">投稿</h2>
      </div>
      <MyPosts posts={props.posts} />
    </section>
  );
};

type PostsProps = {
  posts: MyPostType[];
}