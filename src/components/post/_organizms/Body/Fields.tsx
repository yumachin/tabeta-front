import Field from "../../_molecules/Body/Field";

import { PostField } from "@/types/types";

export default function Fields(props: FieldsProps) {
  return (
    <main className="container px-4 py-6 mx-auto max-w-2xl">
      <div className="space-y-6">
        {props.fields. map((field: PostField, index: number) => (
          <Field key={index} field={field} /> 
        ))}
      </div>
    </main>
  );
};

type FieldsProps = {
  fields: PostField[];
}