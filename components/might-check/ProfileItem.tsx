import { FC } from 'react';
import Image from 'next/image';
import UserPicture from '../profile-header/UserPicture';

interface ProfileItemProps {
  src: string;
  username: string;
  desc: string;
}

const ProfileItem: FC<ProfileItemProps> = ({ src, username, desc }) => {
  return (
    <div className="flex gap-[10px]">
      <UserPicture src={src} />
      <div className="flex-1">
        <div className="font-semibold text-sm">@{username}</div>
        <div className="text-[10px] text-grey-content font-normal mt-2">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
