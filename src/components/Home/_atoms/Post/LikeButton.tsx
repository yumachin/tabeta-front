import { Heart } from "lucide-react";

export default function LikeButton() {
  return (
    <button className="flex items-center text-gray-700 hover:text-orange-500">
      <Heart className="w-6 h-6" />
    </button>
  );
};