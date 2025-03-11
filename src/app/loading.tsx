export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="mb-16 relative">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 bg-white rounded-full border-2 border-orange-300 overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 bg-orange-100 h-0"></div>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 flex space-x-1">
              <div className="w-1.5 h-16 bg-amber-800 rounded-t-full"></div>
              <div className="w-1.5 h-16 bg-amber-800 rounded-t-full"></div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-orange-500 mb-2 animate-bounce">
          おいしいご飯を
          <br />
          準備中...
        </h2>
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-orange-300 animate-bounce delay-0"></div>
          <div className="w-3 h-3 rounded-full bg-orange-400 animate-bounce delay-150"></div>
          <div className="w-3 h-3 rounded-full bg-orange-500 animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
};