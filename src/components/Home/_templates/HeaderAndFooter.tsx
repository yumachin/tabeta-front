"use client";

import { usePathname } from "next/navigation";

import Footer from "../_organisms/Footer/Footer";
import Header from "../_organisms/Header/Header";

export default function HeaderAndFooter({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pb-16">
        <div className="container px-4 mx-auto">{children}</div>
      </main>
      {pathname !== "/LP" && <Footer />}
    </div>
  );
};