"use client";

import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

import ToggleBar from "../../Home/_molecules/Header/ToggleBar";
import FirstHeader from "../_molecules/FirstHeader";

export default function Header(props: HeaderProps) {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-10 space-y-2 bg-white border-b border-gray-200">
      {pathname === "/ff" ? 
        <FirstHeader name={props.name} /> : <FirstHeader />
      }
      {pathname === "/" || pathname === "/ff" && (
        props.onNext && props.onPrev && props.buttonState !== undefined && props.setButtonState ? (
          <ToggleBar onNext={props.onNext} onPrev={props.onPrev} buttonState={props.buttonState} setButtonState={props.setButtonState} />
        ) : (
          <ToggleBar />
        )
      )}
    </header>
  );
};

type HeaderProps = {
  onNext?: () => void;
  onPrev?: () => void;
  buttonState?: number;
  setButtonState?: Dispatch<SetStateAction<number>>;
  name?: string;
}