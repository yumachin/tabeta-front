// パスワード用Input

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import InputTitle from '../_atoms/InputTitle'
import InputForm from '../_atoms/InputForm'
import ShowButton from '../_atoms/ShowButton'
import AuthDescription from '../_atoms/AuthDescription'

interface AuthFormProps {
    authMode: "sign-in" | "sign-up";
}

const InputSection2 = (props: AuthFormProps) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="space-y-2">
			<InputTitle inputType="password" />
			<div className="relative">
				<InputForm inputType="password" showPassword={showPassword} />
				<ShowButton showPassword={showPassword} setShowPassword={setShowPassword} />
			</div>

			{props.authMode === "sign-up" && (
				<div>
					<AuthDescription authMode="password" />
				</div>
			)}
		</div>
	)
}

export default InputSection2