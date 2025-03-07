"use client";

export default function RecommendedPhotoButton() {
  const handleClick = () => {
    // const posts = await api
  };

  return (
    <button 
      className="flex-1 py-3 font-medium text-center text-gray-500"
      onClick={handleClick}
    >
      おすすめ
    </button>
  );
};