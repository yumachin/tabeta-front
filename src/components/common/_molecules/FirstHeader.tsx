"use client";

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import AuthButtons from '@/components/Home/_atoms/Header/AuthButtons';
import Title from '@/components/post/_atoms/Header/Title';

import Logo from '../_atoms/Logo';
import ProflieIcon from '../_atoms/ProflieIcon';

export default function FirstHeader() {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <div className="container flex items-center justify-between h-15 mt-1 sm:mt-3 p-4 mx-auto">
      {pathname === "/" || "/LP" ? <Logo /> : <Title /> }
      {isAuth && <ProflieIcon /> }
      {(pathname === "/LP" && !isAuth) && <AuthButtons /> }
    </div>
  );
};