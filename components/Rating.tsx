import { FC } from 'react';
import Image from 'next/image';
import { start } from 'repl';

const Rating: FC = () => {
  return (
    <div className="flex md:flex-1 md:mr-6 justify-between items-center">
      <div className="flex items-center md:justify-between gap-[5px]">
        <span className="font-medium text-sm mr-2">Rating</span>
        <Image src="/rated-icon.svg" alt="rated icon" width={16} height={15} />
        <Image src="/rated-icon.svg" alt="rated icon" width={16} height={15} />
        <Image src="/rated-icon.svg" alt="rated icon" width={16} height={15} />
        <Image src="/rated-icon.svg" alt="rated icon" width={16} height={15} />
        <Image
          src="/unrated-icon.svg"
          alt="rated icon"
          width={16}
          height={15}
        />
      </div>
      <div className="text-[10px] md:self-end">4.5 of 193 reviews</div>
    </div>
  );
};

export default Rating;
