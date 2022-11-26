import { FC } from 'react';
import Image from 'next/image';

const MenuBar: FC = () => {
  return (
    <div className="flex md:hidden justify-center gap-16 sm:gap-[71.3px] bg-white fixed bottom-0 w-full h-16 overflow-hidden">
      <Image
        src="/home-icon.svg"
        alt="menu bar icon"
        width={22.4}
        height={22.4}
      />
      <Image
        src="/search-icon.svg"
        alt="menu bar icon"
        width={22.4}
        height={22.4}
      />
      <Image
        src="/post-icon.svg"
        alt="menu bar icon"
        width={22.4}
        height={22.4}
      />
      <Image
        src="/calendar-icon.svg"
        alt="menu bar icon"
        width={22.4}
        height={22.4}
      />
    </div>
  );
};

export default MenuBar;
