"use client";

import Image from 'next/image';
// import { useRouter } from 'next/navigation';

import TabetaLogo from "../../../../public/TabetaLogo.png";

export default function Logo () {
  // const router = useRouter();
  const handleClick = () => {
    // if "認証持ってる" :
    //   router.push("/");
    // else :
    // router.push("/LP");
  };

  return (
    <Image src={TabetaLogo} alt="Logo" className="w-40 h-auto sm:w-50 sm:h-auto" onClick={handleClick} />
  );
};