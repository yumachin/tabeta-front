"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import Footer from "@/components/Home/_organisms/Footer/Footer";
import { PostingType } from "@/types/types";
import { postPost } from "@/utils/api/posts/post/api";
import { postValidation } from "@/utils/validationSchema";

import Field from "../_molecules/Body/Field";
import PostHeader from "../_molecules/Header/PostHeader";

export default function Post() {
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm<PostingType>({
    mode: 'onChange',
    resolver: zodResolver(postValidation)
  });

  const user_id = Number(localStorage.getItem("user_id"));
  const session_id = localStorage.getItem("session_id");

  if (!user_id || !session_id) {
    console.error("認証されていません");
    router.push("/auth/sign-in");
    return;
  }

  const formSubmit: SubmitHandler<PostingType> = async (formData) => {
    const addedFormData = {...formData, user_id};
    const image_path = addedFormData.image_path;
    delete addedFormData.image_path;

    const postData = new FormData();
    postData.append("json_data", JSON.stringify(addedFormData));
    if (image_path) {
      postData.append("photo", image_path);
    } else {
      postData.append("photo", "");
    }

    const loadingToast = toast.loading("投稿中...");
    try {
      await postPost(postData, session_id);
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