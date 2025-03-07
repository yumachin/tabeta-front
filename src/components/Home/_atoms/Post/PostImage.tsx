import Image from 'next/image';

export default function PostImage() {
  return (
    <Image
      src="/placeholder.svg?height=600&width=600"
      width={600}
      height={600}
      alt=""
      className="object-cover w-full h-full"
    />
  );
};