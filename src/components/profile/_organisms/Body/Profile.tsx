import Icon from "../../_atoms/Body/Icon";
import EditButton from "../../_molecules/Body/EditButton";
import UserInf from "../../_molecules/Body/UserInf";

import { User } from "@/types/types";


export default function Profile(props: ProfileProps) {
  return (
    <section className="container px-4 py-6 mx-auto">
      <div className="flex items-start">
        <Icon ImagePath={props.user.ProfileImagePath}/>
        <UserInf user={props.user}/>
      </div>
      <EditButton />
    </section>
  );
};

type ProfileProps = {
  user: User;
}