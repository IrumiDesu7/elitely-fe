import { Dispatch, FC, SetStateAction } from 'react';
import Separator from './base/Separator';

interface NavbarProps {
  setIsMainActive: Dispatch<SetStateAction<boolean>>;
  isMainActive: boolean;
}

const Navbar: FC<NavbarProps> = ({ setIsMainActive, isMainActive }) => {
  return (
    <>
      <ul className="flex justify-evenly font-semibold text-xs w-full">
        <li
          className="relative py-[15px] px-10 md:px-[49px]"
          onClick={() => setIsMainActive(true)}
        >
          Main
          {isMainActive && (
            <div className="absolute w-full bottom-0 left-0 h-[1px] bg-brand"></div>
          )}
        </li>
        <li
          className="relative py-[15px] px-10 md:px-[49px] "
          onClick={() => setIsMainActive(false)}
        >
          About
          {!isMainActive && (
            <div className="absolute w-full bottom-0 left-0 h-[1px] bg-brand"></div>
          )}
        </li>
        <li className="py-[15px] px-10 md:px-[49px]">Posts</li>
      </ul>
      <Separator />
    </>
  );
};

export default Navbar;
