import React from 'react'
import AuthTitle from '../_atoms/AuthTitle'
import AuthDescription from '../_atoms/AuthDescription'

interface AuthFormProps {
  authMode: "sign-in" | "sign-up";
}

const AuthHeader = (props: AuthFormProps) => {
  return (
    <div className="space-y-2 text-center">
        <AuthTitle authMode={props.authMode} />
        <AuthDescription authMode={props.authMode} />
    </div>
  )
}

export default AuthHeader