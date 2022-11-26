import { FC } from 'react';
import Separator from '../base/Separator';
import FeaturesButton from '../FeaturesButton';
import Bio from './Bio';
import Menu from './Menu';
import Status from './Status';
import Username from './Username';
import UserPicture from './UserPicture';

const ProfileHeader: FC = () => {
  return (
    <div className="p-4 shadow-[0_0.5px_1px_0_rgba(0,0,0,0.1)] bg-white">
      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center gap-[11px]">
          <UserPicture src="/profile.png" />
          <div className="rounded-[100px] bg-secondary2-light border border-secondary2 py-1 px-2 font-semibold text-[9px] text-secondary2">
            PERSONALITY
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center gap-[6px]">
          <Username username="xuixian_98" isVerified />
          <Status />
          <Bio bio="İ'm your manic pixie dream girl ~ Design student and anime weeb. Coffee addict. Anime fan and games. Come say hi!" />
        </div>
        <div>
          <Menu />
        </div>
      </div>
      <Separator className="my-4" />
      <FeaturesButton />
    </div>
  );
};

export default ProfileHeader;
