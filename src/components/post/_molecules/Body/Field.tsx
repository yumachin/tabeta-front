import FieldForm from "../../_atoms/Body/FieldForm";
import FieldName from "../../_atoms/Body/FieldName";

import { PostField } from "@/types/types";

export default function Field(props: FieldProps) {
  return (
    <div className="space-y-2">
      <FieldName str_id={props.field.str_id} label={props.field.label} />
      <FieldForm id={props.field.id} str_id={props.field.str_id} type={props.field.type} />
    </div>
  );
};

type FieldProps = {
  field: PostField;
}