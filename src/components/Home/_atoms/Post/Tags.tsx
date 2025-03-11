export default function Tags(props: TagsProps) {
  if (props.tags.length === 0) {
    return
  }

  return (
    <div className="space-x-1">
      {props.tags.map((tag: string) => <span key={tag} className="break-keep">{`#${tag}`}</span>)} 
    </div>
  );
};

type TagsProps = {
  tags: string[];
}