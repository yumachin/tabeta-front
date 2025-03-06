"use client";

import { Button } from "@/components/ui/button";

export default function Utilitybar() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" className="rounded-full">
        sign in
      </Button>
      <Button variant="outline" className="rounded-full">
        sign up
      </Button>
    </div>
  );
};