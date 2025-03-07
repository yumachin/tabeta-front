import Post from "@/components/post/_templates/Post";

export default function Page() {
  const fields = [
    {
      id: 1,
      str_id: "",
      label: "写真",
      type: ""
    },
    {
      id: 2,
      str_id: "time",
      label: "時間帯",
      type: "datetime-local"
    },
    {
      id: 3,
      str_id: "title",
      label: "タイトル",
      type: "text"
    },
    {
      id: 4,
      str_id: "tags",
      label: "タグ付け",
      type: "text"
    },
    {
      id: 5,
      str_id: "description",
      label: "説明",
      type: ""
    }
  ];

  return <Post fields={fields} />
};