"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import TabetaLogo from "../../../../public/TabetaLogo.png";

export default function Logo () {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const session_id = localStorage.getItem("session_id");
    setIsAuth(!!session_id);
  }, []);
  
  const handleClick = () => {
    if (isAuth) {
      router.push("/");
    } else {
      router.push("/LP");
    }
  };

  return (
    <Image src={TabetaLogo} priority alt="Logo" className="w-40 h-auto sm:w-50 sm:h-auto" onClick={handleClick} />
  );
};