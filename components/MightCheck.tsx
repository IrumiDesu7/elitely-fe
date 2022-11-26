import { FC } from 'react';
import Button from './base/Button';
import Separator from './base/Separator';
import ProfileItem from './might-check/ProfileItem';

const MightCheck: FC = () => {
  return (
    <div className="hidden md:block w-[304px]">
      <div className="bg-white m-4 rounded-[10px] px-6 py-[13.5px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]">
        <div className="font-semibold text-sm">You might also wanna check</div>
        <Separator className="my-4" />
        <ProfileItem
          src="/model4.png"
          username="fight4myway"
          desc="Get to know more about me!"
        />
        <Separator className="my-4" />
        <ProfileItem
          src="/model5.png"
          username="fight4myway"
          desc="Get to know more about me!"
        />
        <Separator className="my-4" />
        <ProfileItem
          src="/model6.png"
          username="fight4myway"
          desc="Get to know more about me!"
        />
        <Button
          buttonText="Load more"
          className="bg-grey-foreground mt-5 hover:opacity-[.8]"
        />
      </div>
    </div>
  );
};

export default MightCheck;
