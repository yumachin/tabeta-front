export default function IconName(props: IconNameProps) {
  return (
    <span className="mt-1 text-xs">{props.iconName}</span>
  );
};

type IconNameProps = {
  iconName: string;
}