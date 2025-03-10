import HeaderAndFooter from "@/components/Home/_templates/HeaderAndFooter";
import Post from "@/components/Home/_templates/Post";
import { GetLPPost } from "@/types/types";

export default function Page() {
  const posts: GetLPPost[] = [
    {
      id: 1000,
      postUserInf: {
        user_name: "ゆまちん",
        profile_image_path: "/placeholder.svg?height=40&width=40"
      },
      image_path: "/placeholder.svg?height=600&width=600",
      created_at: "2025-03-09T12:34:56Z",
      likes: 114514,
      description: null, 
      tags: [
        "プログラミング", "ムズイ", "ネイティブアプリを使いたい気持ち", "牡蠣を食べました"
    ]
    },
    {
      id: 999,
      postUserInf: {
        user_name: "きよさん",
        profile_image_path: "/placeholder.svg?height=40&width=40"
      },
      image_path: "/placeholder.svg?height=600&width=600",
      created_at: "2025-03-07T12:34:56Z",
      likes: 4545,
      description: "牡蠣を食べました！", 
      tags: [
      ]
    },
    {
      id: 998,
      postUserInf: {
        user_name: "こーせいいいいいいい",
        profile_image_path: "/placeholder.svg?height=40&width=40"
      },
      image_path: "/placeholder.svg?height=600&width=600",
      created_at: "2025-03-05T12:34:56Z",
      likes: 10000,
      description: "React Native使ったよーって人さｓｓｓvj;wn;eubrv;neqb:eramnber:snbe;です!", 
      tags: [
          "プログラミング", "ムズイ", "ネイティブアプリを使いたい気持ち", "牡蠣を食べました"
      ]
    },
    {
      id: 997,
      postUserInf: {
        user_name: "こーせいいいいいいい",
        profile_image_path: "/placeholder.svg?height=40&width=40"
      },
      image_path: "/placeholder.svg?height=600&width=600",
      created_at: "2025-03-05T12:34:56Z",
      likes: 10000,
      description: "React Native使ったよーって人さｓｓｓvj;wn;eubrv;neqb:eramnber:snbe;です!", 
      tags: [
          "プログラミング", "ムズイ", "ネイティブアプリを使いたい気持ち", "牡蠣を食べました"
      ]
    }
  ]

  return (
    <HeaderAndFooter>
      <Post posts={posts} />
    </HeaderAndFooter>
  );
};