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