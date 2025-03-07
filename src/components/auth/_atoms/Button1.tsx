// 背景オレンジで中が白のボタン

import { Button } from '@/components/ui/button'

const Button1 = (props: {authMode: "sign-in" | "sign-up"}) => {
  return (
    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
        {props.authMode === "sign-in" ? "ログイン" : "新規登録"}
    </Button>
  )
}

export default Button1