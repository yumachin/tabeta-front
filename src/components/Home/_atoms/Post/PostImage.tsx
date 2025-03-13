import Image from 'next/image';

export default function PostImage(props: PostImageProps) {
  return (
    <Image
      // src={props.image_path}
      src="/placeholder.svg ? height=600&width=600"
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