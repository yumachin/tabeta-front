import AccountID from "@/components/profile/_atoms/Body/AccountID";
import FF from "@/components/profile/_atoms/Body/FF";
import Name from "@/components/profile/_atoms/Body/Name";
import { User } from "@/types/types";

export default function UserInf(props: userInfProps) {
  return (
    <div className="flex-1">
      <Name user={props.user} />
      <AccountID accountID={props.user.accountID} />
      <FF user={props.user} />
    </div>
  );
};

type userInfProps = {
  user: User;
}