import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import SplitLine from '../_atoms/SplitLine'
import Button2 from '../_atoms/Button2'


const AuthFooter = (props: {authMode: "sign-in" | "sign-up"}) => {
  return (
    <>
        <div className="mt-6">
            <SplitLine />
            <Button2 authMode={props.authMode} />
        </div>
    
        <p className="mt-6 text-sm text-center text-gray-500">
            アカウントをお持ちでない方は{" "}
            <Link href="/auth/sign-up" className="text-orange-500 hover:text-orange-600">
                新規登録
            </Link>
        </p>
    </>
  )
}

export default AuthFooter