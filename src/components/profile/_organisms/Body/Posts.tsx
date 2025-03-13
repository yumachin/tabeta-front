import { MyPostType, User } from "@/types/types";

import MyPosts from "../../_molecules/Body/MyPosts";

export default function Posts(props: PostsProps) {
  return (
    <section className="container px-4 pb-20 mx-auto">
      <div className="pb-2 mb-4 border-b border-gray-200">
        <h2 className="text-lg font-bold">投稿</h2>
      </div>
      <MyPosts user_name={props.user.user_name} posts={props.posts} />
    </section>
  );
};

type PostsProps = {
  user: User;
  posts: MyPostType[];
}