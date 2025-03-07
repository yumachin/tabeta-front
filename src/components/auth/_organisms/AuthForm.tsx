import Button1 from '../_atoms/Button1';
import AuthFooter from '../_molecules/AuthFooter';
import AuthHeader from '../_molecules/AuthHeader';
import InputSection1 from '../_molecules/InputSection1';
import InputSection2 from '../_molecules/InputSection2';

export default function AuthForm(props: AuthFormProps) {
    return (
        <div className="p-6 bg-white rounded-lg sm:p-8 sm:shadow-md">
            <AuthHeader authMode={props.authMode}/>

            <form className="mt-8 space-y-6">
                {props.authMode === "sign-up" && (
                    <InputSection1 inputType="username" />
                )}
                <InputSection1 inputType="email" />
                <InputSection2 authMode={props.authMode} />
                <Button1 authMode={props.authMode} />
            </form>

            <AuthFooter authMode={props.authMode} />
        </div>
    );
};

type AuthFormProps = {
    authMode: "sign-in" | "sign-up";
}