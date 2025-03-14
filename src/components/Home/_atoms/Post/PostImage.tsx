import Image from 'next/image';

export default function PostImage(props: PostImageProps) {
  const imageUrl = `https://160.251.136.146/storage/${props.image_path}`;
  
  return (
    <Image
      src={imageUrl}
      width={600}
      height={600}
      alt=""
      className="object-cover w-full h-full"
    />
  );
};

type PostImageProps = {
  image_path: string;
}