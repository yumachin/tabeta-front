"use client";

// import { useState } from "react";

import AuthForm from "@/components/auth/_organisms/AuthForm";

export default function Page() {
  // const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center w-full px-4 sm:max-w-md sm:mx-auto">
        <AuthForm authMode="sign-up" />
      </div>
    </div>
  );
};