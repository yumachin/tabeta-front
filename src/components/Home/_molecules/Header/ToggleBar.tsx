"use client";

import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export default function ToggleBar(props: ToggleBarProps) {
  const pathname = usePathname();
  const handleReccomendClick = () => {
    if (props.onNext && props.onPrev && props.buttonState !== undefined && props.setButtonState) {
      props.setButtonState(0);
      props.onPrev()
    }
  };

  const handleFollowClick = () => {
    if (props.onNext && props.onPrev && props.buttonState !== undefined && props.setButtonState) {
      props.setButtonState(1);
      props.onNext()
    }
  };

  return (
    <div className="flex border-b border-gray-200">
      <button 
        className={`flex-1 py-3 font-medium text-center ${props.buttonState === 0 ? "text-orange-500" : "text-gray-500"}`}
        onClick={handleReccomendClick}
      >
        {pathname === "/" ? "おすすめ" : "フォロワー"}
      </button>
      <button 
        className={`flex-1 py-3 font-medium text-center ${props.buttonState === 1 ? "text-orange-500" : "text-gray-500"}`}
        onClick={handleFollowClick}
      >
        フォロー中
      </button>
    </div>
  );
};

type ToggleBarProps = {
  onNext?: () => void;
  onPrev?: () => void;
  buttonState?: number;
  setButtonState?: Dispatch<SetStateAction<number>>;
}