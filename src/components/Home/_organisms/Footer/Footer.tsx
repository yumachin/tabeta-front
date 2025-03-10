import NavButton from "../../_molecules/Footer/NavButton";

export default function Footer() {
  const footerElement = ["ホーム", "投稿", "プロフィール"];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200">
      <div className="container flex items-center justify-around h-16 mx-auto">
        {
          footerElement.map(( post: string, index: number ) => 
            <NavButton key={index} iconID={index} iconName={post}/>
          )
        }
      </div>
    </nav>
  );
};