"use client";

import Navbar from "../../_atoms/Header/Navbar";
import Utilitybar from "../../_atoms/Header/Utilitybar";

export default function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center justify-between px-10">
        <Navbar />
        <Utilitybar />
      </div>
    </header>
  );
};