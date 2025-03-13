"use client";

import { usePathname } from 'next/navigation';

import AuthButtons from '@/components/Home/_atoms/Header/AuthButtons';
import Title from '@/components/post/_atoms/Header/Title';

import BackButton from '../_atoms/BackButton';
import Logo from '../_atoms/Logo';

export default function FirstHeader(props: FirstHeaderProps) {
  const pathname = usePathname();

  return (
    <div className="container flex items-center justify-between h-15 mt-1 sm:mt-3 p-4 mx-auto">
      {props.name ? <BackButton /> : (pathname === "/" || "/LP") ? <Logo /> : <Title />}
      {
        pathname === "/ff" &&
        <>
          <p className='text-xl text-gray-600 font-bold'>{props.name}</p>
          <div className='h-12 w-12'></div>
        </>
      }
      {pathname === "/LP" && <AuthButtons />}
    </div>
  );
};

type FirstHeaderProps = {
  name?: string;
}