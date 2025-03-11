export type User = {
  id: number;
  profile_image_path: string;
  name: string;
  account_id: string;
  description: string;
  is_public: boolean;
  follower: number;
  follow: number;
}

export type MyPostType = {
  id: number;
  image_path: string; 
  created_at: string;
  time_section: string;
}

export type SignUpType = {
  user_name: string;
  account_id: string;
  email: string;
  password: string;
}

export type SignInType = {
  email: string;
  password: string;
}

export type PostedUserInfType = {
  user_name: string;
  profile_image_path: string;
}

export type GetLPPost = {
  id: number;
  post_user_inf: PostedUserInfType;
  image_path: string;
  created_at: string;
  likes: number;
  description: string | null; 
  tags: string[];
}

export type FFReration = {
  id: number;
  profile_image_path: string;
  name: string;
  account_id: string;
  description?: string | null;
}

export type PostingType = {
  image_path: string;
  time_section: string;
  is_public: boolean;
  title: string;
  tags?: string[];
  description?: string;
}