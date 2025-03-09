import { Share2 } from "lucide-react";

export default function EditButton() {
  return (
    <div className="flex gap-3 mt-4">
      <button className="flex-1 px-4 py-2 font-medium text-center text-white bg-orange-500 rounded-md hover:bg-orange-600">
        編集
      </button>
      <button className="flex items-center justify-center px-4 py-2 font-medium text-center text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
        <Share2 className="w-4 h-4 mr-1" />
        シェア
      </button>
    </div>
  );
};