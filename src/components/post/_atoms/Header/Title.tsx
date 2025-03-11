"use client";

import { usePathname } from "next/navigation";

export default function Title() {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/post" ? (
        <h1 className="text-2xl font-bold text-orange-500">Post</h1>
      ) : (
        <h1 className="text-2xl font-bold text-orange-500">Profile</h1>
      )}
    </>
  );
};