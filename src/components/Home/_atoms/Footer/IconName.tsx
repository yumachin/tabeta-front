export default function IconName(props: IconNameProps) {
  return (
    <span className="mt-1 text-xs font-medium">{props.iconName}</span>
  );
};

type IconNameProps = {
  iconName: string;
}