import FirstHeader from "../../../common/_molecules/FirstHeader";
import ToggleBar from "../../_molecules/Header/ToggleBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 space-y-2 bg-white border-b border-gray-200">
      <FirstHeader />
      <ToggleBar />
    </header>
  );
};