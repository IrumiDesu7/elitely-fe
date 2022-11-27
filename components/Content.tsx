/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import AboutBio from './about/AboutBio';
import Meetups from './about/Meetups';
import Carousel from './Carousel';
import ShortBio from './contents/ShortBio';

interface ContentProps {
  isMainActive: boolean;
}

const Content: FC<ContentProps> = ({ isMainActive }) => {
  return (
    <>
      {isMainActive && (
        <div className="flex flex-col pt-4 md:bg-white md:rounded-[10px] md:m-4">
          <img
            src="/malo.jpg"
            alt="post image"
            className="h-auto max-w-xs self-center"
          />
          <Carousel />
          <ShortBio
            name="Maloxcox"
            age={23}
            description="Cinta wanita soleh"
            major="Teknik Informatika"
            work="Mahasaiswa Abadi di Unidayan"
          />
        </div>
      )}
      {!isMainActive && (
        <div className="flex flex-col  pt-4 ">
          <AboutBio
            name="Maloxcox"
            age={23}
            major="Teknik Informatika"
            work="Mahasaiswa Abadi di Unidayan"
          />
          <Meetups />
        </div>
      )}
    </>
  );
};

export default Content;
