"use client";

import { Dispatch, RefObject, SetStateAction } from 'react';
import Slider from 'react-slick';

import { GetLPPost } from '@/types/types';

import PostImage from '../_atoms/Post/PostImage';
import PostedUserInf from '../_molecules/Post/PostedUserInf';
import PostFooter from '../_organisms/Post/PostFooter';

export default function Post(props: PostProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <div className='flex flex-col px-4'>
        {props.posts.map((post) => (
          <div key={post.id} className="py-4 border-b border-gray-200">
            <PostedUserInf postUserInf={post.postUserInf} created_at={post.created_at} />
            <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
              <PostImage image_path={post.image_path} />
            </div>
            <PostFooter post={post} />
          </div>
        ))}
      </div>
      
      {props.followedPosts && (
        <div className='flex flex-col px-4'>
          {props.followedPosts.map((followedPost: GetLPPost) => (
            <div key={followedPost.id} className="py-4 border-b border-gray-200">
              <PostedUserInf postUserInf={followedPost.postUserInf} created_at={followedPost.created_at} />
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
                <PostImage image_path={followedPost.image_path} />
              </div>
              <PostFooter post={followedPost} />
            </div>
          ))}
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