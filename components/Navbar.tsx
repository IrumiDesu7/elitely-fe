import { FC } from 'react';
import Separator from './base/Separator';

const Navbar: FC = () => {
  return (
    <>
      <ul className="flex justify-evenly font-semibold text-xs w-full">
        <li className="py-[15px] px-10 md:px-[49px]">Main</li>
        <li className="py-[15px] px-10 md:px-[49px]">About</li>
        <li className="py-[15px] px-10 md:px-[49px]">Posts</li>
      </ul>
      <Separator />
    </>
  );
};

export default Navbar;
