export default function AuthDescription(props: AuthFormProps) {
  let description;
  switch (props.authMode) {
    case "sign-in":
      description = "アカウントにログインしてください";
      break;
    case "sign-up":       
      description = "新規アカウントを作成してください";
      break;
    case "password":
      description = "8文字以上で、英数字を含めてください";
      break;
  }

  return (
    <p className="text-sm text-gray-500">
      {description}
    </p>
  );
};

type AuthFormProps = {
  authMode: "sign-in" | "sign-up" | "password";
}