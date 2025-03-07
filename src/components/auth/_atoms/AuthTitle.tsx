import React from 'react'

interface AuthFormProps {
  authMode: "sign-in" | "sign-up";
}

const AuthTitle = (props: AuthFormProps) => {
  return (
    <h1 className="text-2xl font-bold text-orange-500">
      {props.authMode === "sign-in" ? "ログイン" : "新規登録"}
    </h1>
  )
}

export default AuthTitle