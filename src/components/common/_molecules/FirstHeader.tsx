"use client";

import AuthButtons from '@/components/Home/_atoms/Header/AuthButtons';
// import { useState } from 'react';

import Logo from '../_atoms/Logo';
//import ProflieIcon from '../_atoms/ProflieIcon';

export default function FirstHeader() {
  // const [isAuth, setIsAuth] = useState<boolean>(false);
  // if "認証している" :
  //   setIsAuth(true);
  // else:
  //   setIsAuth(false);

  return (
    <div className="container flex items-center justify-between h-15 mt-1 sm:mt-3 p-4 mx-auto">
      <Logo />
      {/* <ProflieIcon /> */}
      <AuthButtons />
    </div>
  );
};