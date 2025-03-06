"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center gap-6">
      <Link href="/" className="text-4xl font-bold text-orange-600">
        Tabeta!
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="text-sm font-medium border-b-2 border-orange-600">
          home
        </Link>
        <Link href="/menu" className="text-sm font-medium">
          menu
        </Link>
        <Link href="/mobile-app" className="text-sm font-medium">
          mobile app
        </Link>
        <Link href="/contact-us" className="text-sm font-medium">
          contact us
        </Link>
      </nav>
    </div>
  );
};