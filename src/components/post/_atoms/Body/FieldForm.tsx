import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import FieldPhoto from "./FieldPhoto";

export default function FieldForm(props: FieldFormProps) {
  return (
    <>
      {props.id === 1 ? (
        <FieldPhoto /> 
      ) : props.id === 5 ? (
        <Textarea id={props.str_id} placeholder="説明を入力" className="w-full min-h-[100px]" />
      ) : (
        <Input id={props.str_id} type={props.type} className="w-full" />
      )}
    </>
  );
};

type FieldFormProps = {
  id: number;
  str_id: string;
  type: string;
}