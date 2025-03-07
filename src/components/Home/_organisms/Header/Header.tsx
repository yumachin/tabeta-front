"use client";

import { usePathname } from "next/navigation";

import FirstHeader from "../../../common/_molecules/FirstHeader";
import ToggleBar from "../../_molecules/Header/ToggleBar";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-10 space-y-2 bg-white border-b border-gray-200">
      <FirstHeader />
      {pathname === "/" && <ToggleBar />}
    </header>
  );
};