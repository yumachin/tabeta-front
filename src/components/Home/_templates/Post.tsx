import PostImage from '../_atoms/Post/PostImage';
import PostedUserInf from '../_molecules/Post/PostedUserInf';
import PostFooter from '../_organisms/Post/PostFooter';

export default function Post() {
  return (
    <div className="py-4 border-b border-gray-200">
      <PostedUserInf />
      <div className="overflow-hidden bg-gray-100 rounded-lg aspect-square">
        <PostImage />
      </div>
      <PostFooter />
    </div>
  );
};