/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import AboutBio from './about/AboutBio';
import Carousel from './Carousel';
import ShortBio from './contents/ShortBio';

interface ContentProps {
  isMainActive: boolean;
}

const Content: FC<ContentProps> = ({ isMainActive }) => {
  return (
    <>
      {isMainActive && (
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
      )}
      {!isMainActive && (
        <div className="flex flex-col  pt-4 ">
          <AboutBio
            name="Xiuxian"
            age={22}
            major="SIM-UOL"
            work="Student at University"
          />
        </div>
      )}
    </>
  );
};

export default Content;
