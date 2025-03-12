"use client";

import { Menu, Bookmark, Settings, Moon, Heart, LogOut, Bell, History, UserX, BookOpen, Lock, ShieldMinus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

import { DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MenuItem = ({ icon, label, onClick }: MenuItemProps) => {
  return (
    <button 
      onClick={onClick} 
      className={`flex items-center gap-4 w-full p-3 
        ${label === "ログアウト" && "text-orange-400 font-bold"}
        ${label === "アカウント削除" && "text-red-500 font-bold"}`
      }
    >
      {icon}
      <span className="text-base">{label}</span>
    </button>
  );
};

export default function HamburgerMenu() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("session_id");
    router.push("/LP");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-gray-700">
          <Menu className="mr-1 w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-white text-black p-4 rounded-lg">
        <div className="flex flex-col h-full">
          <DialogTitle
            className="text-xl font-semibold text-gray-900 border-b-2 border-zinc-400 pt-2 pb-4 mt-8"
          >
              設定とアクティビティ
          </DialogTitle>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            <MenuItem icon={<Bell className="h-6 w-6" />} label="通知" />
            <MenuItem icon={<Heart className="h-6 w-6" />} label="いいね" />
            <MenuItem icon={<Bookmark className="h-6 w-6" />} label="ブックマーク" />
            <MenuItem icon={<History className="h-6 w-6" />} label="アーカイブ" />

            <div className="my-4 border-b border-zinc-400" />

            <MenuItem icon={<Settings className="h-6 w-6" />} label="設定とプライバシー" />
            <MenuItem icon={<Lock className="h-6 w-6" />} label="パスワード変更" />
            <MenuItem icon={<ShieldMinus className="h-6 w-6" />} label="2段階認証" />
            <MenuItem icon={<Moon className="h-6 w-6" />} label="ダークモード" />
            <MenuItem icon={<BookOpen className="h-6 w-6" />} label="使い方ガイド" />

            <div className="my-6 border-b border-zinc-400" />

            <MenuItem icon={<LogOut className="h-6 w-6" />} onClick={handleLogout} label="ログアウト" />

            <div className="my-6 border-b border-zinc-400" />

            <MenuItem icon={<UserX className="h-6 w-6" />} label="アカウント削除" />

          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

type MenuItemProps = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}