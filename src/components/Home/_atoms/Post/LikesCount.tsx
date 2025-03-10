export default function LikesCount(props: LikesCountProps) {
  return (
    <p className="mt-1 text-sm">
      <span className="font-medium">いいね {props.likes}件</span>
    </p>
  );
};

type LikesCountProps = {
  likes: number;
}