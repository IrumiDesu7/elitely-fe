import { FC } from 'react';

interface StatusProps {
  currentStatus?: string;
}

const Status: FC<StatusProps> = ({ currentStatus }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-2 h-2 bg-secondary2 rounded-full"></div>
      <div className="font-medium text-xs">Online Now</div>
    </div>
  );
};

export default Status;
