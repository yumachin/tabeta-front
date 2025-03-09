import Title from "@/components/post/_atoms/Header/Title";
import MenuButton from "@/components/profile/_atoms/Header/MenuButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-14 px-4 mx-auto">
        <Title />
        <MenuButton />
      </div>
    </header>
  );
};