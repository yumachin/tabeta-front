import Footer from "@/components/Home/_organisms/Footer/Footer"
import Header from "@/components/profile/_molecules/Header/Header"
import Posts from "@/components/profile/_organisms/Body/Posts"
import Profile from "@/components/profile/_organisms/Body/Profile"
import { MyPostType, User } from "@/types/types"


import PullUpLogo from "../../../public/pullup.png";

export default function Page() {
  const user: User =
    {
      ProfileImagePath: "/placeholder.svg?height=80&width=80", 
      name: "Kiyoya", 
      accountID: "kiyoya123", 
      is_public: true, 
      follower: 98,
      follow: 142
    };

    const posts: MyPostType[] = [
      {
        id: 123,
        ImagePath: PullUpLogo.src, 
        created_at: "2025-03-06T12:34:56.789Z", 
        time_section: "昼"
      },
      {
        id: 89,
        ImagePath: PullUpLogo.src,
        created_at: "2025-03-06T08:34:56.789Z", 
        time_section: "朝"
      },
      {
        id: 44,
        ImagePath: PullUpLogo.src,
        created_at: "2025-03-05T19:34:56.789Z", 
        time_section: "晩"
      },
      {
        id: 10,
        ImagePath: PullUpLogo.src,
        created_at: "2025-03-05T12:34:56.789Z", 
        time_section: "昼"
      }
    ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Profile user={user}/>
      <Posts posts={posts} />
      <Footer />
    </div>
  );
};