"use client";

import { Ellipsis } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { use, useEffect, useRef, useState } from 'react';

// import PullUpLogo from "../../../../public/pullup.png";

import PostImage from '@/components/Home/_atoms/Post/PostImage';
import Time from '@/components/Home/_atoms/Post/Time';
import Footer from '@/components/Home/_organisms/Footer/Footer';
import PostFooter from '@/components/Home/_organisms/Post/PostFooter';
import PostHeader from '@/components/post/_molecules/Header/PostHeader';
import { GetLPPost } from '@/types/types';
import { getIndividualPosts } from '@/utils/api/posts/get/api';

export default function Page(props: PageProps) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const propsParams = use(props.params);
  // パラメーターは文字列より、数値に変換
  const post_id = Number(propsParams.id);
  const searchParams = useSearchParams();
  const user_name = searchParams.get('user_name');
  const postRefs = useRef<RefType>({});

  useEffect(() => {
    const fetchProfilePosts = async () => {
      try {
        const user_id = Number(localStorage.getItem("user_id"));
        const session_id = localStorage.getItem("session_id");

        if (!user_id || !session_id) {
          console.error("認証されていません");
          setLoading(false);
          router.push("/auth/sign-in");
          return;
        }

        const userPosts = await getIndividualPosts(user_id, user_id, session_id);

        setPosts(userPosts);
        setLoading(false);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      }
    };
    fetchProfilePosts();
  }, [router]);

  // postRefs: useRef で作成された参照オブジェクト
  // postRefs.current: 参照されるデータを保持する実際のプロパティ
  useEffect(() => {
    if (post_id && postRefs.current[post_id]) {
      postRefs.current[post_id]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [post_id]);

  // HTMLDivElement: <div> 要素に対応する型
  // setRef: 別の関数を返す関数 => 高階関数
  const setRef = (postId: number) => (element: HTMLDivElement | null) => {
    postRefs.current[postId] = element; 
  };

  console.log("postsは", posts)

  // const posts: GetLPPost[] = [
  //   {
  //     id: 10,
  //     post_user_inf: {
  //       id: 6,
  //       user_name: "ゆうま",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: PullUpLogo.src,
  //     created_at: "2025-03-05T12:34:56.789Z", 
  //     time_section: "昼",
  //     likes: 111,
  //     description: "すごくいい天気ですね。"
  //   },
  //   {
  //     id: 9,
  //     post_user_inf: {
  //       id: 6,
  //       user_name: "ゆうま",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: PullUpLogo.src,
  //     created_at: "2025-03-05T12:34:56.789Z", 
  //     time_section: "昼",
  //     likes: 111,
  //     description: "すごくいい天気ですね。"
  //   },
  //   {
  //     id: 8,
  //     post_user_inf: {
  //       id: 6,
  //       user_name: "ゆうま",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: PullUpLogo.src,
  //     created_at: "2025-03-05T12:34:56.789Z", 
  //     time_section: "昼",
  //     likes: 111,
  //     description: "すごくいい天気ですね。"
  //   },
  //   {
  //     id: 7,
  //     post_user_inf: {
  //       id: 6,
  //       user_name: "ゆうま",
  //       profile_image_path: "/placeholder.svg?height=40&width=40"
  //     },
  //     image_path: PullUpLogo.src,
  //     created_at: "2025-03-05T12:34:56.789Z", 
  //     time_section: "昼",
  //     likes: 111,
  //     description: "すごくいい天気ですね。"
  //   }
  // ];

  return (
    <div className='flex-1 pb-16'>
      <div className="container px-4 mx-auto">
        <PostHeader />
        {loading ? (
          <div className="flex flex-col items-center justify-center h-[70vh] space-y-12">
            <h2 className="text-2xl text-orange-500 font-bold animate-bounce">おいしい投稿を料理中...　🍴</h2>
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-orange-200 animate-bounce delay-0"></div>
              <div className="w-3 h-3 rounded-full bg-orange-400 animate-bounce delay-150"></div>
              <div className="w-3 h-3 rounded-full bg-orange-600 animate-bounce delay-300"></div>
            </div>
          </div>
          ) : (
            posts.map((post: GetLPPost) => (
              <div 
                key={post.id}
                // postId = post.id の値を持つ関数が返される
                // <>がレンダリングされるとき、自動的にその DOM を element 引数として受け取る
                // setRef 発火
                ref={setRef(post.id)}
                className="py-4 border-b border-gray-200"
              >
                <div className='flex justify-between py-2 px-4'>
                  <Time created_at={post.created_at} path={pathname} />
                  <Ellipsis />
                </div>
                <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
                  <PostImage image_path={post.image_path} />
                </div>
                <PostFooter post={post} user_name={user_name} />
              </div>
            ))
          )
        }
        <Footer />
      </div>
    </div>
  );
};

type PageProps = {
  params: Promise<RouteParams>;
}
type RouteParams = {
  id: string;
}

type RefType = {
  [key: number]: HTMLDivElement | null;
};