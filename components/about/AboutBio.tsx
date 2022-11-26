import { FC } from 'react';
import Image from 'next/image';
import Separator from '../base/Separator';
import Rating from '../Rating';
import Button from '../base/Button';
import Meetups from './Meetups';

interface AboutBioProps {
  name: string;
  age?: number;
  major?: string;
  work?: string;
}

const AboutBio: FC<AboutBioProps> = ({ name, age, major, work }) => {
  return (
    <div className="p-4 m-4 pb-[59px] bg-white rounded-[10px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]">
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
          <span className="text-xs font-medium ml-2">{major}</span>
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
          <span className="text-xs font-medium ml-2">{work}</span>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex text-xs">
        <ul className="flex-1 flex flex-col gap-1  font-semibold ">
          <li>Age</li>
          <li>Race</li>
          <li>Languages</li>
          <li>Height</li>
          <li>Sexual Orientation</li>
          <li>Chats</li>
          <li>Meetups</li>
        </ul>
        <ul className="flex-1  flex flex-col gap-1 font-normal text-grey-content">
          <li>22</li>
          <li>Chinese</li>
          <li>English, Mandarin</li>
          <li>158cm</li>
          <li>Heterosexual</li>
          <li>30 SGD / 30 days</li>
          <li>200 SGD / 2h</li>
        </ul>
      </div>
      <Separator className="my-4" />
      <Rating />
      <Button buttonText="Reviews" className="bg-grey-foreground mt-4" />
      <Meetups />
    </div>
  );
};

export default AboutBio;
