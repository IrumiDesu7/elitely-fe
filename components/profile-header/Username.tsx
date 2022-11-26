import { FC } from "react";
import Image from "next/image";

interface UsernameProps {
  username: string;
  isVerified?: boolean;
}

const Username: FC<UsernameProps> = ({ username, isVerified }) => {
  return (
    <div className="flex items-center gap-[10px]">
      <span className="font-semibold text-sm">@{username}</span>
      {isVerified && (
        <Image
          src="/verified-icon.svg"
          alt="verified icon"
          width={16}
          height={16}
        />
      )}
    </div>
  );
};

export default Username;
