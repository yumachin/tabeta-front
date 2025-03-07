"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthTitle from "@/components/auth/_atoms/AuthTitle";
import AuthDescription from "@/components/auth/_atoms/AuthDescription";
import InputTitle from "@/components/auth/_atoms/InputTitle";
import InputForm from "@/components/auth/_atoms/InputForm";
import AuthForm from "@/components/auth/_organisms/AuthForm";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center w-full px-4 sm:max-w-md sm:mx-auto">
        <AuthForm authMode="sign-up" />
      </div>
    </div>
  );
};