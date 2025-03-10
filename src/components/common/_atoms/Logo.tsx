"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import TabetaLogo from "../../../../public/TabetaLogo.png";

export default function Logo () {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const handleClick = () => {
    if (isAuth) {
      router.push("/");
    } else {
      router.push("/LP");
    }
  };

  return (
    <Image src={TabetaLogo} alt="Logo" className="w-40 h-auto sm:w-50 sm:h-auto" onClick={handleClick} />
  );
};