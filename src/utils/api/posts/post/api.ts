// const LOCAL_API_URL = 'http://localhost:8000';
const LOCAL_API_URL = 'http://160.251.136.146';

// ➀ 投稿する
export const postPost = async (postData: FormData, session_id: string | null) => {
  if (!session_id) {
    throw new Error("セッションID無効");
  }
  console.log("APIに到達したよ。");
  
  try {
    const res = await fetch(`${LOCAL_API_URL}/api/post`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": session_id
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