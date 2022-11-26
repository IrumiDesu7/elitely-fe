import { FC } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface ArrowNavProps {
  desc: string;
}

const ArrowNav: FC<ArrowNavProps> = ({ desc }) => {
  return (
    <div className="font-semibold text-lg flex items-center gap-5 px-5 py-[18.5px] shadow-[0_0.5px_1px_0_rgba(0,0,0,0.1)]">
      <AiOutlineArrowLeft />{' '}
      <span className="flex-1 md:text-center">{desc}</span>
    </div>
  );
};

export default ArrowNav;
