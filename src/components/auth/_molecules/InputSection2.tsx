// パスワード用Input
"use client";

import { useState } from 'react';

import AuthDescription from '../_atoms/AuthDescription';
import InputForm from '../_atoms/InputForm';
import InputTitle from '../_atoms/InputTitle';
import ShowButton from '../_atoms/ShowButton';

export default function InputSection2(props: AuthFormProps) {
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
	);
};

type AuthFormProps = {
	authMode: "sign-in" | "sign-up";
}