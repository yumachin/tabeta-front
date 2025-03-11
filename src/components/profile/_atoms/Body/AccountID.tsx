export default function AccountID(props: AccountIDProps) {
  return (
    <p className="text-sm text-gray-500">{`ID: ${props.account_id}`}</p>
  );
};

type AccountIDProps = {
  account_id: string;
} 