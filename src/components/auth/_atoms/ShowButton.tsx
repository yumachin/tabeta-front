import { Eye, EyeOff } from 'lucide-react';

export default function ShowButton(props: ShowButtonProps) {
  return (
    <button
        type="button"
        onClick={() => props.setShowPassword(!props.showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
    >
        {props.showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
    </button>
  );
};

type ShowButtonProps = {
  showPassword: boolean;            
  setShowPassword: (showPassword: boolean) => void;
}