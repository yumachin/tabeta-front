import { TmpUser } from "../../_organisms/Body/Profile";

export default function Name(props: NameProps) {
  return (
    <div className="flex items-end space-x-2">
      <h2 className="text-xl font-bold">{props.user.user_name}</h2>
      <h4>{props.user.is_public ? "(公開)": "(非公開)"}</h4>
    </div>
  );
};

type NameProps = {
  user: TmpUser;
}