import { FC } from 'react';
import Image from 'next/image';
import { start } from 'repl';

const Rating: FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[5px]">
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
      <div className="text-[10px]">4.5 of 193 reviews</div>
    </div>
  );
};

export default Rating;
