import InputForm from '../_atoms/InputForm';
import InputTitle from '../_atoms/InputTitle';

export default function InputSection1(props: AuthInputFormProps) {
  return (
    <div className="space-y-2">
      <InputTitle inputType={props.inputType} />
      <InputForm  inputType={props.inputType}/>
    </div>
  );
};

type AuthInputFormProps = {
  inputType: "username" | "email";
}