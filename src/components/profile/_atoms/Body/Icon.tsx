import Image from "next/image";

import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Icon(props: IconProps) {
  const imageUrl = `http://160.251.136.146/storage/${props.image_path}`;

  return (
    <div className="flex-shrink-0 mr-6">
      <Dialog>
        <DialogTrigger>
          {imageUrl ? (
            <Image 
              src={imageUrl}
              width={70}
              height={70}
              alt="UserIcon" 
              className="object-cover w-full h-full rounded-full aspect-square"
            />
          ) : (
            <Image 
              src="placeholder.svg"
              width={70}
              height={70}
              alt="UserIcon" 
              className="rounded-full border-1"
            />
          )}
        </DialogTrigger>
        <DialogContent className="rounded-full">
          {/* sr-only: 視覚的に消す */}
          <DialogTitle className="sr-only">User Icon</DialogTitle>
          <Image 
            src={imageUrl}
            width={80}
            height={80}
            alt="UserIcon" 
            className="object-cover w-full h-full rounded-full aspect-square"
          />
          <DialogClose className="sr-only" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

type IconProps = {
  image_path: string;
}