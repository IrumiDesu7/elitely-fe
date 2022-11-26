import { FC } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const Meetups: FC = () => {
  return (
    <div className="flex items-center justify-between mt-[27.5px]">
      <div className="font-semibold text-sm ">Meetups</div>
      <div className="flex items-center gap-6">
        <SlArrowLeft />
        <SlArrowRight />
      </div>
    </div>
  );
};

export default Meetups;
