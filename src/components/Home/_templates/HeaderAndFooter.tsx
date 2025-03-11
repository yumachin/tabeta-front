"use client";

import { usePathname } from "next/navigation";
import { Dispatch, ReactNode, SetStateAction } from "react";

import Header from "../../common/_organism/Header";
import Footer from "../_organisms/Footer/Footer";

export default function HeaderAndFooter(props: HeaderAndFooterProps) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col min-h-screen">
      {props.name ? (
        props.onNext && props.onPrev && props.buttonState !== undefined && props.setButtonState ? (
          <Header onNext={props.onNext} onPrev={props.onPrev} buttonState={props.buttonState} setButtonState={props.setButtonState} name={props.name} />
        ) : <Header />
        ) : (
          props.onNext && props.onPrev && props.buttonState !== undefined && props.setButtonState ? (
          <Header onNext={props.onNext} onPrev={props.onPrev} buttonState={props.buttonState} setButtonState={props.setButtonState} />
        ) : <Header />
      )}
      <main className="flex-1 pb-16">
        <div className="container px-4 mx-auto">{props.children}</div>
      </main>
      {pathname !== "/LP" && <Footer />}
    </div>
  );
};

type HeaderAndFooterProps = {
  onNext?: () => void;
  onPrev?: () => void;
  buttonState?: number;
  setButtonState?: Dispatch<SetStateAction<number>>;
  name?: string | null;
  children: ReactNode;
}