import Link from "next/link";

import { MyPostType } from "@/types/types";

import MyPost from "../../_atoms/Body/MyPost";

export default function MyPosts(props: MyPostsProps) {
  return (
    <div>
      {props.posts?.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-16 px-4">
          <div className="text-4xl text-gray-400 mb-4">📷</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">まだ投稿がありません</h2>
          <p className="text-gray-600 mb-8 max-w-xs mx-auto">美味しい料理の写真を撮って、みんなとシェアしましょう！</p>
          <Link href="/post" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full">
            投稿をする
          </Link>
        </div>
        ) : (
      <div className="grid grid-cols-2 gap-1">
        {
          props.posts.map((post: MyPostType, index: number) => (
          <Link href={`/edit/${post.id}`} key={index}>
            <MyPost post={post} />  
          </Link>
        ))}
      </div>
      )}
    </div>
  );
};

type MyPostsProps = {
  posts: MyPostType[];
}