// 背景白で中が黒のボタン

import { Button } from '@/components/ui/button';

export default function Button2(props: {authMode: "sign-in" | "sign-up"}) {
  return (
    <Button type="button" variant="outline" className="w-full mt-4">
        {props.authMode === "sign-in" ? "Googleでログイン" : "Googleで新規登録"}
    </Button>
  );
};