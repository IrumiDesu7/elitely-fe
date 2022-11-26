import { FC } from 'react';
import Image from 'next/image';
import Separator from '../base/Separator';

interface ShortBioProps {
  name: string;
  age?: number;
  major?: string;
  work?: string;
  description: string;
}

const ShortBio: FC<ShortBioProps> = ({
  name,
  age,
  major,
  work,
  description,
}) => {
  return (
    <div className="p-4 pb-[59px]">
      <div className="font-semibold text-base">
        {name}
        {age && ','} {age}
      </div>
      <div className="flex items-center gap-6 mt-2">
        <div className="flex items-center">
          <div className="flex gap-2 justify-center items-center w-[22px] h-[22px] rounded-full bg-grey-foreground">
            <Image
              src="/major-icon.svg"
              alt="menu icon"
              width={14}
              height={12}
            />
          </div>
          <span className="text-xs font-medium">{major}</span>
        </div>
        <div className="flex items-center">
          <div className="flex gap-2 justify-center items-center w-[22px] h-[22px] rounded-full bg-grey-foreground">
            <Image
              src="/work-icon.svg"
              alt="menu icon"
              width={14}
              height={12}
            />
          </div>
          <span className="text-xs font-medium">{work}</span>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="text-xs font-normal">{description}</div>
    </div>
  );
};

export default ShortBio;
