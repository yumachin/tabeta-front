import React, { useState } from 'react'
import AuthTitle from '../_atoms/AuthTitle'
import AuthDescription from '../_atoms/AuthDescription'
import InputTitle from '../_atoms/InputTitle'
import InputForm from '../_atoms/InputForm'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff} from 'lucide-react'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import AuthHeader from '../_molecules/AuthHeader'
import InputSection1 from '../_molecules/InputSection1'
import InputSection2 from '../_molecules/InputSection2'
import AuthFooter from '../_molecules/AuthFooter'
import Button1 from '../_atoms/Button1'

interface AuthFormProps {
    authMode: "sign-in" | "sign-up";
}

const AuthForm = (props: AuthFormProps) => {1
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
    )
}

export default AuthForm