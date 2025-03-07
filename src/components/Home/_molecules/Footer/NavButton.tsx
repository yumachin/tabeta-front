import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';
import Link from 'next/link';

import Icon from '../../_atoms/Footer/Icon';
import IconName from '../../_atoms/Footer/IconName';

export default function NavButton(props: NavButtonProps) {
  const icons = [Home, Search, PlusSquare, Heart, User];
  const icon = icons[props.iconID];
  const links = ["", "", "post", "profile", "profile"];
  const link = links[props.iconID];

  return (
    <Link
      href={`/${link}`}
      className='flex flex-col items-center justify-center'
    >
      <Icon icon={icon} />
      <IconName iconName={props.iconName} />
    </Link>
  );
};

type NavButtonProps = {
  iconID: number;
  iconName: string;
}