"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, RefObject, SetStateAction } from 'react';
import Slider from 'react-slick';

import { GetLPPost } from '@/types/types';

import PostImage from '../_atoms/Post/PostImage';
import PostedUserInf from '../_molecules/Post/PostedUserInf';
import PostFooter from '../_organisms/Post/PostFooter';

export default function Post(props: PostProps) {
  const pathname = usePathname(); 
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    afterChange: (current: number) => {
      if (props.setButtonState) {
        if (current === 0) {
          props.setButtonState(0);
        } else {
          props.setButtonState(1);
        }
      }
    }
  };

  return (
    <Slider {...settings} ref={props.ref} >
      <div className='flex flex-col px-2'>
        {props.posts?.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-16 px-4">
            <div className="text-4xl text-gray-400 mb-4">📷</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">まだ投稿がありません</h2>
            <p className="text-gray-600 mb-8 max-w-xs mx-auto">美味しい料理の写真を撮って、みんなとシェアしましょう！</p>
            <Link href={pathname === "/" ? "/post" : "/auth/sign-in"} className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full">
              {pathname === "/" ? "最初の投稿をする" : "ログインする"}
            </Link>
          </div>
         ) : ( props.posts.map((post: GetLPPost) => (
          <div key={post.id} className="py-4 border-b border-gray-200">
            <PostedUserInf post_user_inf={post.post_user_inf} created_at={post.created_at} pathname={pathname} />
            <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
              <PostImage image_path={post.image_path} />
            </div>
            <PostFooter post={post} user_name={post.post_user_inf.user_name} />
          </div>))
        )}
      </div>
      
      {props.followedPosts && (
        <div className='flex flex-col px-2'>
          { props.posts?.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-16 px-4">
            <div className="text-4xl text-gray-400 mb-4">📷</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">まだ投稿がありません</h2>
            <p className="text-gray-600 mb-8 max-w-xs mx-auto">美味しい料理の写真を撮って、みんなとシェアしましょう！</p>
            <Link href={pathname === "/" ? "/post" : "/auth/sign-in"} className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full">
              {pathname === "/" ? "最初の投稿をする" : "ログインする"}
            </Link>
          </div>
         ) : ( props.followedPosts.map((followedPost: GetLPPost) => (
            <div key={followedPost.id} className="py-4 border-b border-gray-200">
              <PostedUserInf post_user_inf={followedPost.post_user_inf} created_at={followedPost.created_at} />
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
                <PostImage image_path={followedPost.image_path} />
              </div>
              <PostFooter post={followedPost} user_name={followedPost.post_user_inf.user_name} />
            </div>))
          )}
        </div>
      )}
    </Slider>
  );
};

type PostProps = {
  posts: GetLPPost[];
  followedPosts?: GetLPPost[];
  ref?: RefObject<Slider | null>;
  setButtonState?: Dispatch<SetStateAction<number>>;
}