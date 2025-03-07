import { Home, Search, PlusSquare, Heart, User, Menu, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-14 px-4 mx-auto">
          <h1 className="text-xl font-bold text-orange-500">プロフィール</h1>
          <button className="flex items-center justify-center w-8 h-8 text-gray-700">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Profile Info */}
      <section className="container px-4 py-6 mx-auto">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <Image
              src="/placeholder.svg?height=80&width=80"
              width={80}
              height={80}
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">きよや</h2>
            <p className="text-sm text-gray-500">ID: kiyoya123</p>
            <div className="flex mt-2 space-x-4 text-sm">
              <div>
                <span className="font-semibold">142</span> <span className="text-gray-500">フォロワー</span>
              </div>
              <div>
                <span className="font-semibold">98</span> <span className="text-gray-500">フォロー中</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button className="flex-1 px-4 py-2 font-medium text-center text-white bg-orange-500 rounded-md hover:bg-orange-600">
            編集
          </button>
          <button className="flex items-center justify-center px-4 py-2 font-medium text-center text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
            <Share2 className="w-4 h-4 mr-1" />
            シェア
          </button>
        </div>

        <div className="mt-6">
          <p className="text-sm">
            写真好きな大学生です。風景や日常の一コマを切り取っています。 #写真 #カメラ #ファインダー越しの私の世界
          </p>
        </div>
      </section>

      {/* Posts Section */}
      <section className="container px-4 pb-20 mx-auto">
        <div className="pb-2 mb-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">自分の投稿</h3>
        </div>

        <div className="grid grid-cols-2 gap-1">
          {[1, 2, 3, 4].map((post) => (
            <div key={post} className="aspect-square overflow-hidden">
              <Image
                src={`/placeholder.svg?height=300&width=300&text=Post${post}`}
                width={300}
                height={300}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200">
        <div className="container flex items-center justify-around h-16 mx-auto">
          <Link href="/" className="flex flex-col items-center justify-center text-gray-500">
            <Home className="w-6 h-6" />
            <span className="mt-1 text-xs">ホーム</span>
          </Link>
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
          <button className="flex flex-col items-center justify-center text-orange-500">
            <User className="w-6 h-6" />
            <span className="mt-1 text-xs">プロフィール</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

