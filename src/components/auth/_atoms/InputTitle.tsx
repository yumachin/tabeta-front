import React from 'react'
import { Label } from "@/components/ui/label"

interface AuthInputFormProps {
  inputType: "username" | "email" | "password";
}

const InputTitle = (props: AuthInputFormProps) => {
  let title;
  switch (props.inputType) {
    case "username":
      title = "ユーザー名";
      break;
    case "email":
      title = "メールアドレス";
      break;
    case "password":
      title = "パスワード";
      break;
  }

  return (
    <Label htmlFor={props.inputType}>
      {title}
    </Label>
  )
}

export default InputTitle