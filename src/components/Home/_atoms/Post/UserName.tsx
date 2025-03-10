export default function UserName(props: UserNameProps) {
  return <p className="font-medium">{props.name}</p>
};

type UserNameProps = {
  name: string;
}