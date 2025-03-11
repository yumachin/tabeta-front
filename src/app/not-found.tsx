import { UtensilsCrossed, LogIn } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-white px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
              <UtensilsCrossed className="h-12 w-12 text-orange-500" />
            </div>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
              404
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ページが見つかりません</h1>
        <p className="text-gray-600 mb-8">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row justify-center">
          <Button asChild className="bg-orange-500 hover:bg-orange-600">
            <Link href="/auth/sign-in" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              ログインする
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-16 text-sm text-gray-500">Tabeta | おいしいご飯を共有しよう</div>
    </div>
  );
};