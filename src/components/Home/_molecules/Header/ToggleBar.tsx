import FollowedPhotoButton from '../../_atoms/Header/FollowedPhotoButton';
import RecommendedPhotoButton from '../../_atoms/Header/RecommendedPhotoButton';

export default function ToggleBar() {
  return (
    <div className="flex border-b border-gray-200">
      <RecommendedPhotoButton />
      <FollowedPhotoButton />
    </div>
  );
};