"use client";

import { usePathname } from "next/navigation";

export default function Title() {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/post" ? (
        <h1 className="text-xl font-bold text-orange-500">投稿</h1>
      ) : (
        <h1 className="text-xl font-bold text-orange-500">プロフィール</h1>
      )}
    </>
  );
};