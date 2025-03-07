export default function Icon(props: IconProps) {
  return (
    <div>
      <props.icon className="w-6 h-6" />
    </div>
  );
};

// className を当てられるようにする
type IconProps = {
  icon: React.ComponentType<{ className: string }>;
}