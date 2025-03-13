import { ProfileEdit } from "@/components/modal/_templates/ProfileEdit";
import { User } from "@/types/types";

export default function EditButton(props: EditButtonProps) {
  return (
    <div className="flex gap-3 mt-4">
      <ProfileEdit user={props.user} />
    </div>
  );
};

type EditButtonProps = {
  user: User;
}