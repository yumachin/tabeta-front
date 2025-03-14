// const LOCAL_API_URL = 'http://localhost:8000';
const LOCAL_API_URL = 'https://160.251.136.146';

// ➀ フォロー中かどうか判定
export const checkIfFollowing = async (id: number, user_id: number | null, session_id: string | null) => {
  try {
    if (!session_id || !user_id) {
      throw new Error("セッションID, 又はユーザーIDが無効");
    }
    const res = await fetch(`${LOCAL_API_URL}/api/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": session_id
      },
      body: JSON.stringify({viewer_id: user_id, poster_id: id}),
      cache: "no-store"
    });
    const data = await res.json();
    return data.details;
  } catch(error) {
    console.error("フォロー状態の確認APIのエラー", error);
    throw new Error("フォロー状態の確認失敗");
  }
};

// ➁ フォローする
export const followingUser = async (id: number, user_id: string | null, session_id: string | null) => {
  try {
    if (!user_id || !session_id) {
      throw new Error("セッションID, 又はユーザーIDが無効");
    }
    const res = await fetch(`${LOCAL_API_URL}/api/follow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": session_id
      },
      body: JSON.stringify({follower_user_id: id, user_id: Number(user_id)}),
      cache: "no-store"
    });
    const data = await res.json();
    return data.message;
  } catch(error) {
    console.error("フォローAPIのエラー", error);
    throw new Error("フォロー失敗");
  }
};

// ➂ フォロー解除する
export const unFollowingUser = async (id: number, user_id: string | null, session_id: string | null) => {
  try {
    if (!user_id || !session_id) {
      throw new Error("セッションID, 又はユーザーIDが無効");
    }
    const res = await fetch(`${LOCAL_API_URL}/api/unfollow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": session_id
      },
      body: JSON.stringify({follower_user_id: id, user_id: Number(user_id)}),
      cache: "no-store"
    });
    const data = await res.json();
    return data.details;
  } catch(error) {
    console.error("フォロー解除APIのエラー", error);
    throw new Error("フォロー解除失敗");
  }
};

// ➃ プロフィールを更新
export const updateProfile = async (postData: FormData, session_id: string | null) => {
  try {
    if (!session_id) {
      throw new Error("セッションID無効");
    }
    const res = await fetch(`${LOCAL_API_URL}/api/update-profile`, {
      method: 'POST',
      // headers: {
      //   "Content-Type": "application/json",
      //   "Authorization": session_id
      // },
      body: postData
    });
    const data = await res.json();
    return data;
  } catch(error) {
    console.error("プロフィール更新APIのエラー", error);
    throw new Error("プロフィール更新失敗");
  }
};