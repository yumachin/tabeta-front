"use client";

import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function BackButton() {
  return (
    <Button className="bg-transparent shadow-none text-black" onClick={() => window.history.back()}><ArrowLeft /></Button>
  );
};
