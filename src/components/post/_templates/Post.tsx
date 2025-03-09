import Footer from "@/components/Home/_organisms/Footer/Footer";
import { PostField } from "@/types/types";

import PostHeader from "../_molecules/Header/PostHeader";
import Fields from "../_organizms/Body/Fields";


export default function Post(props: PostProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <PostHeader />
      <Fields fields={props.fields} />
      <Footer />
    </div>
  );
};

type PostProps = {
  fields: PostField[];
}