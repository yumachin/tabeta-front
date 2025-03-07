export default function SplitLine() {
  return (
    <div className="relative">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-500 bg-white">または</span>
        </div>
    </div>
  );
};