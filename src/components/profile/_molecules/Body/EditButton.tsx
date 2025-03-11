// import { Share2 } from "lucide-react";

import { ProfileEdit } from "@/components/modal/_templates/ProfileEdit";
import { User } from "@/types/types";

export default function EditButton(props: EditButtonProps) {
  return (
    <div className="flex flex-c gap-3 mt-4">
      <ProfileEdit user={props.user} />
      {/* <button className="flex items-center justify-center px-4 py-2 font-medium text-center text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
        <Share2 className="w-4 h-4 mr-1" />
        シェア
      </button> */}
    </div>
  );
};

type EditButtonProps = {
  user: User;
}