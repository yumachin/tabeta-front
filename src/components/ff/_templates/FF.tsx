"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, RefObject, SetStateAction } from 'react';
import Slider from 'react-slick';

import { FFReration } from '@/types/types';

export default function FF(props: FFProps) {
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
        {props.followers.map((follower: FFReration) => (
          <Link href={`/profile/${follower.id}`} key={follower.id}>
            <div className="py-4 border-b border-gray-200">
              <div className="flex items-start">
                <Image
                  src={follower.profile_image_path || "/placeholder.svg"}
                  width={60}
                  height={60}
                  alt={`${follower.name}'s avatar`}
                  className="rounded-full mr-3"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <p className="font-bold">{follower.name}</p>
                      </div>
                      <p className="text-gray-500 text-sm">{follower.account_id}</p>
                    </div>
                  </div>
                  {follower.description ? (
                    <p className="mt-2 text-sm">{follower.description}</p>
                  ) : <></>}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex flex-col px-2'>
        {props.followings.map((following: FFReration) => (
          <Link href={`/profile/${following.id}`} key={following.id}>
            <div className="py-4 border-b border-gray-200">
              <div className="flex items-start">
                <Image
                  src={following.profile_image_path || "/placeholder.svg"}
                  width={60}
                  height={60}
                  alt={`${following.name}'s avatar`}
                  className="rounded-full mr-3"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <p className="font-bold">{following.name}</p>
                      </div>
                      <p className="text-gray-500 text-sm">{following.account_id}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm">{following.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Slider>
  );
};

type FFProps = {
  followers: FFReration[];
  followings: FFReration[];
  ref: RefObject<Slider | null>;
  setButtonState: Dispatch<SetStateAction<number>>;
}