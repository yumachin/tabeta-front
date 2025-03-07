"use client";

import Image from 'next/image';

export default function ProflieIcon() {
  return (
    <button 
      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100"
    >
      <Image
        src="/placeholder.svg?height=32&width=32"
        width={24}
        height={24}
        alt="profile"
        className="rounded-full"
      />
    </button>
  );
};