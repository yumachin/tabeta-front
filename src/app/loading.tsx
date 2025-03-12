import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center">

        <div className="relative w-full flex justify-center mb-4">
          <div className="w-3 h-10 bg-white/40 rounded-full animate-steam-1 opacity-0"></div>
          <div className="w-3 h-10 bg-white/40 rounded-full animate-steam-2 opacity-0 ml-4"></div>
          <div className="w-3 h-10 bg-white/40 rounded-full animate-steam-3 opacity-0 ml-4"></div>
        </div>

        <div className="w-40 h-40 rounded-full bg-orange-200 flex items-center justify-center mb-10 relative overflow-hidden shadow-lg">

          <div className="w-32 h-32 rounded-full bg-white shadow-sm flex items-center justify-center relative">

            <div className="absolute w-20 h-20 bg-amber-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

              <div className="absolute w-18 h-18 bg-amber-50 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

              <div className="absolute animate-bounce delay-100 w-5 h-5 bg-orange-500 rounded-sm top-2 left-4 rotate-12"></div>
              <div className="absolute animate-bounce delay-300 w-6 h-4 bg-green-400 rounded-sm top-3 right-3 rotate-45"></div>
              <div className="absolute animate-bounce delay-500 w-4 h-4 bg-red-400 rounded-full bottom-3 left-5"></div>
              <div className="absolute animate-bounce delay-700 w-5 h-3 bg-amber-800 rounded-sm bottom-4 right-4 rotate-12"></div>
            </div>

            <div className="absolute w-1.5 h-24 bg-amber-800 rotate-[30deg] right-0 -top-2 rounded-full"></div>
            <div className="absolute w-1.5 h-24 bg-amber-800 rotate-[20deg] right-3 -top-2 rounded-full"></div>
          </div>

          <div className="absolute inset-0 border-4 border-dashed border-orange-300 rounded-full animate-spin-slow"></div>
        </div>

        <p className="text-center text-orange-600 text-xl font-medium mb-8">美味しいページを料理中...</p>

        <div className="flex items-center justify-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
          <span className="text-lg font-medium text-orange-500">Loading...</span>
        </div>
      </div>
    </div>
  );
};