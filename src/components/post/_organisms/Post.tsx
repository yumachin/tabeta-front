"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Footer from "@/components/Home/_organisms/Footer/Footer";
import { PostingType } from "@/types/types";
import { postValidation } from "@/utils/validationSchema";

import Field from "../_molecules/Body/Field";
import PostHeader from "../_molecules/Header/PostHeader";

export default function Post() {
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm<PostingType>({
    mode: 'onChange', 
    resolver: zodResolver(postValidation)
  });

  const formSubmit: SubmitHandler<PostingType> = async (formData) => {
    const loadingToast = toast.loading("投稿中...");
    try {
      await axios.post("http://localhost:3001/all-post", {
        Image_path: formData.Image_path, 
        time_section: formData.time_section,
        is_public: formData.is_public,
        title: formData.title,
        description: formData.description
        // tags: formData.tags,
        // user_id: userID, 
        // sessionID
      });
      toast.success("投稿しました！", { id: loadingToast });
      setTimeout(() => {
        toast.dismiss(loadingToast);
        router.push("/");
      }, 1000);
    } catch (error) {
      toast.error("投稿に失敗しました。",  { id: loadingToast });
      console.error("エラー", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PostHeader onSubmit={handleSubmit(formSubmit)} />
      <form onSubmit={handleSubmit(formSubmit)}>
        <Field control={control} errors={errors}  /> 
      </form>
      <Footer />
    </div>
  );
};