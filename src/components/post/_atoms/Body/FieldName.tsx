import { Label } from "@/components/ui/label";

export default function FieldName(props: FieldNameProps) {
  return (
    <Label htmlFor={props.str_id}>{props.label}</Label>
  );
};

type FieldNameProps = {
  str_id: string;
  label: string;
}