import { HandlerProps } from "@/app/profile/[id]/page";

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
      {props.id ?
        <FFButton user={props.user} isFollowing={props.isFollowing} handleFollowed={props.handleFollowed} handleDeleteFollowed={props.handleDeleteFollowed} /> :
        <EditButton user={props.user} />
      }
      <div className="mt-6">
        <p className="text-sm">
          {props.user.description}
        </p>
      </div>
    </section>
  );
};

export type TmpUser = {
  user_id: number;
  profile_image_path: string;
  user_name: string;
  account_id: string;
  description: string;
  email: string;
  is_public: string;
  follower: number;
  follow: number;
}

type ProfileProps = {
  user: TmpUser;
  id?: number;
  isFollowing?: boolean | null;
  handleFollowed?: (handlerProps: HandlerProps) => void; 
  handleDeleteFollowed?: (handlerProps: HandlerProps) => void ;
}