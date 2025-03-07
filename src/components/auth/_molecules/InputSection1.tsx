import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import InputTitle from '../_atoms/InputTitle';
import InputForm from '../_atoms/InputForm';

interface AuthInputFormProps {
  inputType: "username" | "email";
}

const InputSection1 = (props: AuthInputFormProps) => {
  return (
    <div className="space-y-2">
      <InputTitle inputType={props.inputType} />
      <InputForm  inputType={props.inputType}/>
    </div>
  )
}

export default InputSection1