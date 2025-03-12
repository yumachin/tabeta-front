// npm install date-fns
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';

export default function Time(props: TimeProps) {
  return <p className={`${props.path ? "text-sm text-black font-bold" : "text-xs text-gray-500"}`}>{formatDistanceToNow(new Date(props.created_at), { locale: ja })}前</p>
};

type TimeProps = {
  created_at: string;
  path?: string;
}