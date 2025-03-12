const LOCAL_API_URL = 'http://localhost:8000';

// ➀ 投稿する
export const postPost = async (postData: FormData, session_id: string) => {
  try {
    const res = await fetch(`${LOCAL_API_URL}/api/post`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session_id}`
      },
      body: postData
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("投稿APIのエラー", error);
    throw new Error("投稿失敗");
  }
};