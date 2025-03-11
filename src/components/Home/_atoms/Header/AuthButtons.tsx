import { LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function AuthButtons() {
  return (
    <div className="flex items-center space-x-3 sm:space-x-10">
      <Link href="/auth/sign-in" className="text-orange-600">
        <div className='flex flex-col justify-center items-center text-xs'>
          <LogIn className="w-5 h-5" />
          ログイン
        </div>
      </Link>
      <Link href="/auth/sign-up" className="text-orange-600" >
        <div className='flex flex-col justify-center items-center text-xs'>
          <UserPlus className="w-5 h-5" />
          新規登録
        </div>
      </Link>
    </div> 
  );
};