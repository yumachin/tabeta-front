import { Menu } from 'lucide-react';

export default function MenuButton () {
  return (
    <button className="flex items-center justify-center w-8 h-8 text-gray-700">
      <Menu className="w-8 h-8" />
    </button>
  );
};