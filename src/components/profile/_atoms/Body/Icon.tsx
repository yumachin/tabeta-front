import Image from "next/image";

import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Icon(props: IconProps) {
  return (
    <div className="flex-shrink-0 mr-6">
      <Dialog>
        <DialogTrigger>
          {props.image_path ? (
            <Image 
              src={props.image_path}
              width={80}
              height={80}
              alt="UserIcon" 
              className="rounded-full border-1"
            />
          ) : (
            <Image 
              src="placeholder.svg"
              width={80}
              height={80}
              alt="UserIcon" 
              className="rounded-full border-1"
            />
          )}
        </DialogTrigger>
        <DialogContent className="rounded-full">
          {/* sr-only: 視覚的に消す */}
          <DialogTitle className="sr-only">User Icon</DialogTitle>
          <Image 
            src={props.image_path}
            width={80}
            height={80}
            alt="UserIcon" 
            className="rounded-full w-full h-auto"
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