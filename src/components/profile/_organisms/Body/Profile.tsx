import { User } from "@/types/types";

import Icon from "../../_atoms/Body/Icon";
import EditButton from "../../_molecules/Body/EditButton";
import FFButton from "../../_molecules/Body/FFButton";
import UserInf from "../../_molecules/Body/UserInf";

export default function Profile(props: ProfileProps) {
  return (
    <section className="container px-4 py-6 mx-auto">
      <div className="flex items-start">
        <Icon image_path={props.user.profile_image_path}/>
        <UserInf user={props.user}/>
      </div>
      {props.id ? <FFButton isFollowing={props.isFollowing} handleFollowed={props.handleFollowed} handleDeleteFollowed={props.handleDeleteFollowed} /> : <EditButton />}
      <div className="mt-6">
        <p className="text-sm">
          {props.user.description}
        </p>
      </div>
    </section>
  );
};

type ProfileProps = {
  user: User;
  id?: string;
  isFollowing?: boolean | null;
  handleFollowed?: () => void ;
  handleDeleteFollowed?: () => void ;
}