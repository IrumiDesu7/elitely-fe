/* eslint-disable @next/next/no-img-element */
import { FC, useEffect } from 'react';
import Separator from './base/Separator';
import Carousel from './Carousel';
import ShortBio from './contents/ShortBio';

interface ContentProps {
  activeContent?: string;
}

const Content: FC<ContentProps> = ({ activeContent }) => {
  useEffect(() => {
    console.log('testing mic');
  }, []);
  return (
    <div className="flex flex-col  pt-4 ">
      <img
        src="/post-profile.png"
        alt="post image"
        className="h-auto max-w-xl self-center"
      />
      <Carousel />
      <ShortBio
        name="Xiuxian"
        age={22}
        description="Gemini. Art student and tall.
Coffee, cold showers and early morning walks!"
        major="SIM-UOL"
        work="Student at University"
      />
    </div>
  );
};

export default Content;
