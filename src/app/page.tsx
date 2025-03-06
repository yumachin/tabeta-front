import { Home, Search, PlusSquare, Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import TabetaLogo from "../../public/TabetaLogo.png";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-14 px-4 mx-auto">
          <Image src={TabetaLogo} alt="aaa" className="w-40 h-auto" />
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
              <Image
                src="/placeholder.svg?height=32&width=32"
                width={24}
                height={24}
                alt=""
                className="rounded-full"
              />
            </button>
          </div>
        </div>
        <div className="flex border-b border-gray-200">
          <button className="flex-1 py-3 font-medium text-center border-b-2 border-orange-500 text-orange-500">
            おすすめ
          </button>
          <button className="flex-1 py-3 font-medium text-center text-gray-500">フォロー中</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-16">
        <div className="container px-4 mx-auto">
          {/* Post */}
          {[1, 2, 3].map((post) => (
            <div key={post} className="py-4 border-b border-gray-200">
              <div className="flex items-center mb-3">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt=""
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="font-medium">ユーザー名</p>
                  <p className="text-xs text-gray-500">2時間前</p>
                </div>
              </div>
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-700 hover:text-orange-500">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="flex items-center text-gray-700 hover:text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </button>
                </div>
                <button className="flex items-center text-gray-700 hover:text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-sm">
                <span className="font-medium">いいね 123件</span>
              </p>
              <p className="mt-1 text-sm">
                <span className="font-medium">ユーザー名</span> 素敵な写真ですね！ #写真 #風景
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200">
        <div className="container flex items-center justify-around h-16 mx-auto">
          <button className="flex flex-col items-center justify-center text-orange-500">
            <Home className="w-6 h-6" />
            <span className="mt-1 text-xs">ホーム</span>
          </button>
          <button className="flex flex-col items-center justify-center text-gray-500">
            <Search className="w-6 h-6" />
            <span className="mt-1 text-xs">検索</span>
          </button>
          <button className="flex flex-col items-center justify-center text-gray-500">
            <PlusSquare className="w-6 h-6" />
            <span className="mt-1 text-xs">投稿</span>
          </button>
          <button className="flex flex-col items-center justify-center text-gray-500">
            <Heart className="w-6 h-6" />
            <span className="mt-1 text-xs">通知</span>
          </button>
          <Link href="/profile" className="flex flex-col items-center justify-center text-gray-500">
            <User className="w-6 h-6" />
            <span className="mt-1 text-xs">プロフィール</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};