import { FC } from 'react';
import Image from 'next/image';

interface UserPictureProps {
  src: string;
  alt?: string;
}

const UserPicture: FC<UserPictureProps> = ({ src, alt }) => {
  return (
    <div className=" flex justify-center items-center  w-[66px] h-[66px] rounded-full border border-secondary2">
      <Image
        src={src}
        alt={alt || 'User Profile Picture'}
        className="rounded-full"
        width={60}
        height={60}
      />
    </div>
  );
};

export default UserPicture;
