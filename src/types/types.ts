export type PostField = {
  id: number;
  str_id: string;
  label: string;
  type: string;
}

export type User = {
  ProfileImagePath: string;
  name: string;
  accountID: string;
  is_public: boolean;
  follower: number;
  follow: number;
}

export type MyPostType = {
  id: number;
  ImagePath: string; 
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
  postUserInf: PostedUserInfType;
  image_path: string;
  created_at: string;
  likes: number;
  description: string | null; 
  tags: string[];
}