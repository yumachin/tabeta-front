import BackButton from "@/components/common/_atoms/BackButton";
import Logo from "@/components/common/_atoms/Logo";
import Title from "@/components/post/_atoms/Header/Title";
import MenuButton from "@/components/profile/_atoms/Header/MenuButton";

export default function Header(props: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        {props.id ? <BackButton /> : <Title />}
        {props.id && <Logo />}
        {!props.id ? <MenuButton /> : <div className="w-16 h-16"></div>}
      </div>
    </header>
  );
};

type HeaderProps = {
  id?: string;
}