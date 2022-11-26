import { FC } from 'react';
import Image from 'next/image';

interface ProfileItemProps {
  src: string;
  type: string;
  username: string;
  lastSeen: string;
}

const ProfileItem: FC<ProfileItemProps> = ({
  src,
  type,
  username,
  lastSeen,
}) => {
  return (
    <div className="flex gap-[10px]">
      <Image
        src={src}
        alt="model picture"
        width={80}
        height={80}
        className="rounded-xl"
      />
      <div>
        <div className="font-semibold text-sm">{type}</div>
        <div className="text-grey-content font-normal text-sm">@{username}</div>
        <div className="text-xs font-normal mt-6">Online {lastSeen}</div>
      </div>
    </div>
  );
};

export default ProfileItem;
