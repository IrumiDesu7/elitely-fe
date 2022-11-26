import { FC } from 'react';
import Separator from './base/Separator';
import Image from 'next/image';
import ProfileItem from './new-members/ProfileItem';
import Button from './base/Button';

const NewMembers: FC = () => {
  return (
    <div className="hidden md:block w-[304px]">
      <div className="bg-white m-4 rounded-[10px] px-6 py-[13.5px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]">
        <div className="font-semibold text-sm">Meet our new members</div>
        <Separator className="my-4" />
        <ProfileItem
          src="/model1.png"
          type="INFLUENCER"
          username="gella_97"
          lastSeen="3 min ago"
        />
        <Separator className="my-4" />
        <ProfileItem
          src="/model2.png"
          type="INFLUENCER"
          username="gella_97"
          lastSeen="3 min ago"
        />
        <Separator className="my-4" />
        <ProfileItem
          src="/model3.png"
          type="INFLUENCER"
          username="gella_97"
          lastSeen="3 min ago"
        />
        <Separator className="my-4" />
        <ProfileItem
          src="/model3.png"
          type="INFLUENCER"
          username="gella_97"
          lastSeen="3 min ago"
        />
        <Button
          buttonText="Load more"
          className="bg-grey-foreground mt-5  hover:opacity-[.8]"
        />
      </div>
    </div>
  );
};

export default NewMembers;
