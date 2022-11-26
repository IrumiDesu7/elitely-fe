import { FC } from "react";

interface BioProps {
  bio: string;
}

const Bio: FC<BioProps> = ({ bio }) => {
  return <div className="font-medium text-grey-content text-[9px]">{bio}</div>;
};

export default Bio;
