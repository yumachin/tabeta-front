import { Label } from "@/components/ui/label";

export default function InputTitle(props: AuthInputFormProps) {
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
  );
};

type AuthInputFormProps = {
  inputType: "username" | "email" | "password";
}