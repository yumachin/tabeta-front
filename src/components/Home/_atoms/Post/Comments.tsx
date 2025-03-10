export default function Comments(props: CommentsProps) {
  if (props.description === ""){
    return
  }
  return <span className="break-words">{props.description}</span>
};

type CommentsProps = {
  description: string;
}