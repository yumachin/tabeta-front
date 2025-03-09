export default function AccountID(props: AccountIDProps) {
  return (
    <p className="text-sm text-gray-500">{`ID: ${props.accountID}`}</p>
  );
};

type AccountIDProps = {
  accountID: string;
}