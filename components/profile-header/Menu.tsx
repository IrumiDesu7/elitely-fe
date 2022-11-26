import { FC } from 'react';
import Image from 'next/image';

const Menu: FC = () => {
  return (
    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-grey-foreground">
      <Image src="/hamburger-icon.svg" alt="menu icon" width={20} height={16} />
    </div>
  );
};

export default Menu;
