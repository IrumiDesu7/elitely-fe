import { FC } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Separator from '../base/Separator';
import Image from 'next/image';
import Carousel from '../Carousel';

const Meetups: FC = () => {
  return (
    <div className="p-4 pt-0">
      <div className="flex items-center justify-between mt-[27.5px]">
        <div className="font-semibold text-sm ">Meetups</div>
        <div className="flex items-center gap-6">
          <SlArrowLeft />
          <SlArrowRight />
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex gap-[10px]">
        <Image
          src="/activity-icon.svg"
          alt="activity icon"
          width={56}
          height={56}
        />
        <div className="text-xs">
          <div className="font-semibold">Activities</div>
          <div className="text-grey-content">
            Cafe, bar, picnic, anything easy going!
          </div>
        </div>
      </div>
      <div className="flex gap-[10px] mt-4">
        <Image src="/food-icon.svg" alt="food icon" width={56} height={56} />
        <div className="text-xs">
          <div className="font-semibold">Activities</div>
          <div className="text-grey-content">
            Cafe, bar, picnic, anything easy going!
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default Meetups;
