import { Input } from "@/components/ui/input";

export default function InputForm(props: AuthInputFormProps) {
  let placeholderCss;
  switch (props.inputType) {
    case "username":
      placeholderCss = "yourname";
      break;
    case "email":
      placeholderCss = "your@email";
      break;
    case "password":
      placeholderCss = "••••••••";
      break;
  }

  let typeCss;
  switch (props.inputType) {
    case "username":
    case "email":
      typeCss = "text";
      break;
    case "password":
      typeCss = props.showPassword ? "text" : "password";
      break;
  }

  return (
    <Input id={props.inputType} type={typeCss} placeholder={placeholderCss} required className="w-full" />
  );
};

type AuthInputFormProps = {
  inputType: "username" | "email" | "password";
  showPassword?: boolean;
}