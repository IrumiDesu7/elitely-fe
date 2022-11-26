import { FC } from "react";
import Image from "next/image";

interface UserPictureProps {
  src: string;
  alt?: string;
}

const UserPicture: FC = () => {
  return (
    <div className=" flex justify-center items-center  w-[66px] h-[66px] rounded-full border border-secondary2">
      <Image
        src="/profile.png"
        alt="User Profile Picture"
        className="rounded-full"
        width={60}
        height={60}
      />
    </div>
  );
};

export default UserPicture;
