// const LOCAL_API_URL = 'http://localhost:8000';
const LOCAL_API_URL = 'https://160.251.136.146';

// ➀ プロフィールを取得
export const getUserProfile = async (target_user_id: number, user_id: number | null, session_id: string | null) => {
  try {
    if (!user_id || !session_id) {
      throw new Error("セッションID, 又はユーザーIDが無効");
    }
    const res = await fetch(`${LOCAL_API_URL}/api/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": session_id
      },
      body: JSON.stringify({viewer_id: user_id, poster_id: target_user_id}),
      cache: "no-store"
    });
    const data = await res.json();
    return data.details;
  } catch(error) {
    console.error("ユーザープロフィール取得APIのエラー", error);
    throw new Error("ユーザープロフィール取得失敗");
  }
};

// ➁ フォロワーを取得
export const getFollowers = async (user_id: number | null, session_id: string | null) => {
  try {
    if (!user_id || !session_id) {
      throw new Error("セッションID, 又はユーザーIDが無効");
    }
    const res = await fetch(`${LOCAL_API_URL}/api/followed-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": session_id
      },
      body: JSON.stringify({user_id}),
      cache: "no-store"
    });
    const data = await res.json();
    return data.details;
  } catch(error) {
    console.error("フォロワー取得APIのエラー", error);
    throw new Error("フォロワー取得失敗");
  }
};

// ➂ フォロー中のユーザーを取得
export const getFollowings = async (user_id: number | null, session_id: string | null) => {
  try {
    if (!user_id || !session_id) {
      throw new Error("セッションID, 又はユーザーIDが無効");
    }
    const res = await fetch(`${LOCAL_API_URL}/api/following-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": session_id
      },
      body: JSON.stringify({user_id}),
      cache: "no-store"
    });
    const data = await res.json();
    return data.details;
  } catch(error) {
    console.error("フォロー中ユーザー取得APIのエラー", error);
    throw new Error("フォロー中ユーザー取得失敗");
  }
};