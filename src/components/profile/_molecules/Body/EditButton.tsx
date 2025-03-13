import { ProfileEdit } from "@/components/modal/_templates/ProfileEdit";

import { TmpUser } from "../../_organisms/Body/Profile";

export default function EditButton(props: EditButtonProps) {
  return (
    <div className="flex gap-3 mt-4">
      <ProfileEdit user={props.user} />
    </div>
  );
};

type EditButtonProps = {
  user: TmpUser;
}