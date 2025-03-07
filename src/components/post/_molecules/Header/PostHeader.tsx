import CanselButton from "../../_atoms/Header/CanselButton";
import PostButton from "../../_atoms/Header/PostButton";
import Title from "../../_atoms/Header/Title";

export default function PostHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-14 px-4 mx-auto">
        <CanselButton />
        <Title />
        <PostButton />
      </div>
    </header>
  );
};