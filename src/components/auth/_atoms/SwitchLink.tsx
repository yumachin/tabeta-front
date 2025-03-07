import Link from "next/link";

export default function SwitchLink(props: {authMode: "sign-in" | "sign-up"}) {
  return (
    <>
      {props.authMode === "sign-in" ? (
        <p className="mt-6 text-sm text-center text-gray-500">
          アカウントをお持ちでない方は{" "}
          <Link href="/auth/sign-up" className="text-orange-500 hover:text-orange-600">
            新規登録
          </Link>
        </p>
      ) : (
        <p className="mt-6 text-sm text-center text-gray-500">
          すでにアカウントをお持ちの方は{" "}
          <Link href="/auth/sign-in" className="text-orange-500 hover:text-orange-600">
            ログイン
          </Link>
        </p>
      )}
    </>
  );
};