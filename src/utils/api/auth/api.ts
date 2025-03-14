import axios from 'axios';

import { SignInType, SignUpType } from '@/types/types';

// const LOCAL_API_URL = 'http://localhost:8000';
const LOCAL_API_URL = 'https://160.251.136.146';

// ➀ サインアップ
export const signUp = async (formData: SignUpType) => {
  try {
    const res = await axios.post(`${LOCAL_API_URL}/api/sign-up`, {
      account_id: formData.account_id,
      user_name: formData.user_name,
      email: formData.email, 
      password: formData.password
    });
    return res.data;
  } catch (error) {
    console.error("サインアップAPIのエラー", error);
    throw new Error("サインアップ失敗");
  }
};

// ➁ サインイン
export const signIn = async (formData: SignInType) => {
  try {
    const res = await axios.post(`${LOCAL_API_URL}/api/sign-in`, {
      email: formData.email, 
      password: formData.password
    });
    return res.data;
  } catch (error) {
    console.error("サインインAPIのエラー", error);
    throw new Error("サインイン失敗");
  }
};

// ➂ サインアウト
export const signOut = async () => {
  try {
    const res = await axios.post(`${LOCAL_API_URL}/api/sign-out`);
    return res.data;
  } catch (error) {
    console.error("サインアウトAPIのエラー", error);
    throw new Error("サインアウト失敗");
  }
};