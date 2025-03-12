const LOCAL_API_URL = 'http://localhost:8000';

// ➀ すべての投稿を取得
export const getAllPosts = async () => {
  try {
    const res = await fetch(`${LOCAL_API_URL}/api/all-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({}),
      cache: "no-store"
    });
    const data = await res.json();
    return data.details;
  } catch (error) {
    console.error("全投稿取得APIのエラー", error);
    throw new Error("全投稿取得失敗");
  }
};

// ➁ フォローしている人の投稿を取得
export const getFollowedAllPosts = async (user_id: number, session_id: string) => {
  try {
    const res = await fetch(`${LOCAL_API_URL}/api/follow-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session_id}`
      },
      body: JSON.stringify({ user_id }),
      cache: "no-store"
    });
    const data = await res.json();
    return data.details;
  } catch (error) {
    console.error("フォロー中ユーザーの投稿取得APIのエラー", error);
    throw new Error("フォロー中ユーザーの投稿取得失敗");
  }
};

// ➂ 個人の投稿を取得
export const getIndividualPosts = async (target_user_id: number, user_id: number, session_id: string) => {
  try {
    const res = await fetch(`${LOCAL_API_URL}/api/profile-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session_id}`
      },
      body: JSON.stringify({viewer_id: target_user_id, poster_id: user_id}),
      cache: "no-store"
    });
    const data = await res.json();
    return data.details;
  } catch (error) {
    console.error("個人の投稿取得APIのエラー", error);
    throw new Error("個人の投稿取得失敗");
  }
};