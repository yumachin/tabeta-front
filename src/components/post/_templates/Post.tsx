import PostHeader from "../_molecules/Header/PostHeader";
import Fields from "../_organizms/Body/Fields";

import { PostField } from "@/types/types";

export default function Post(props: PostProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <PostHeader />
      <Fields fields={props.fields} />
    </div>
  );
};

type PostProps = {
  fields: PostField[];
}