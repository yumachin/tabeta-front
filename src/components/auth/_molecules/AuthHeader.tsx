import AuthDescription from '../_atoms/AuthDescription';
import AuthTitle from '../_atoms/AuthTitle';

export default function AuthHeader(props: AuthFormProps) {
  return (
    <div className="space-y-2 text-center">
        <AuthTitle authMode={props.authMode} />
        <AuthDescription authMode={props.authMode} />
    </div>
  );
};

type AuthFormProps = {
  authMode: "sign-in" | "sign-up";
}