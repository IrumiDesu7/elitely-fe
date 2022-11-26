import { FC } from 'react';

interface SeparatorProps {
  className?: string;
}

const Separator: FC<SeparatorProps> = ({ className }) => {
  return <div className={`w-full h-[0.5px] bg-grey-border ${className}`} />;
};

export default Separator;
