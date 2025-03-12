const LOCAL_API_URL = 'http://localhost:8000';

// ➀ フォロー中かどうか判定
export const checkIfFollowing = async (id: number, user_id: number, session_id: string) => {
  try {
    const res = await fetch(`${LOCAL_API_URL}/api/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session_id}`
      },
      body: JSON.stringify({viewer_id: id, poter_id: user_id}),
      cache: "no-store"
    });
    const data = await res.json();
    return data.details;
  } catch(error) {
    console.error("フォロー状態の確認APIのエラー", error);
    throw new Error("フォロー状態の確認失敗");
  }
};

// ➁フォローする
export const followingUser = async (id: number, user_id: string | null, session_id: string | null) => {
  try {
    if (!user_id || !session_id) {
      throw new Error("セッションID無効");
    }
    const res = await fetch(`${LOCAL_API_URL}/api/follow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session_id}`
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

// ➁フォロー解除する
export const unFollowingUser = async (id: number, user_id: string | null, session_id: string | null) => {
  try {
    if (!user_id || !session_id) {
      throw new Error("セッションID無効");
    }
    const res = await fetch(`${LOCAL_API_URL}/api/unfollow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session_id}`
      },
      body: JSON.stringify({follower_user_id: id, user_id: Number(user_id)}),
      cache: "no-store"
    });
    const data = await res.json();
    return data.message;
  } catch(error) {
    console.error("フォロー解除APIのエラー", error);
    throw new Error("フォロー解除失敗");
  }
};