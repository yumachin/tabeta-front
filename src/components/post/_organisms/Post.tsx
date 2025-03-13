"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import Footer from "@/components/Home/_organisms/Footer/Footer";
import { PostingType } from "@/types/types";
import { postPost } from "@/utils/api/posts/post/api";
import { postValidation } from "@/utils/validationSchema";

import Field from "../_molecules/Body/Field";
import PostHeader from "../_molecules/Header/PostHeader";

export default function Post() {
  const [userId, setUserId] = useState<number | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm<PostingType>({
    mode: 'onChange',
    resolver: zodResolver(postValidation)
  });

  useEffect(() => {
      const user_id = Number(localStorage.getItem("user_id"));
      const session_id = localStorage.getItem("session_id");
      if (user_id && session_id) {
        setUserId(user_id);
        setSessionId(session_id);
      } else {
        console.error("認証されていません");
        router.push("/auth/sign-in");
      }
  }, [router]);

  const base64ToFile = (base64: string, fileName: string): File => {
    const arr = base64.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1] || "image/png";
    const bstr = atob(arr[1]); // Base64をバイナリにデコード
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
  
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
  
    return new File([u8arr], fileName, { type: mime });
  };

  const formSubmit: SubmitHandler<PostingType> = async (formData) => {
    const addedFormData = {...formData, userId};
    const image_path = addedFormData.image_path;
    delete addedFormData.image_path;
    const decodedFile = image_path ? base64ToFile(image_path, "decoded-image.png") : null;

    console.log("写真削除直後のaddedFormDataは", addedFormData);
    console.log("JSON.stringify(addedFormData)は", JSON.stringify(addedFormData))
    const postData = new FormData();
    postData.append("json_data", JSON.stringify(addedFormData));
    console.log("json_dataをappendした直後のpostData", postData);
    console.log("json_dataをappendした直後のpostData.get(json_data)", postData.get("json_data"));
    if (image_path) {
      console.log("photoがありました。")
      if (decodedFile) {
        postData.append("photo", decodedFile);
      } else {
        postData.append("photo", "");
      }
    } else {
      console.log("photoがありません。");
      postData.append("photo", "");
    }
    console.log("photoをappendした直後のpostData", postData)
    console.log("photoをappendした直後のpostData.get(photo)", postData.get("photo"))

    const loadingToast = toast.loading("投稿中...");
    try {
      await postPost(postData, sessionId);
      toast.success("投稿しました！", { id: loadingToast });
      setTimeout(() => {
        toast.dismiss(loadingToast);
        router.push("/");
      }, 1000);
    } catch (error) {
      toast.error("投稿に失敗しました。",  { id: loadingToast });
      console.error("投稿に失敗しました:", error);
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-50">
        <PostHeader onSubmit={handleSubmit(formSubmit)} />
        <form onSubmit={handleSubmit(formSubmit)}>
          <Field control={control} errors={errors}  /> 
        </form>
        <Footer />
      </div>
    </>
  );
};