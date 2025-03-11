import Image from "next/image";

export default function Icon(props: IconProps) {
  return (
    <div className="flex-shrink-0 mr-4">
      <Image
        src={props.image_path}
        width={80}
        height={80}
        alt="UserIcon"
        className="rounded-full"
      />
    </div>
  );
};

type IconProps = {
  image_path: string;
}