import { FC } from 'react';
import Button from './base/Button';
const FeaturesButton: FC = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <Button buttonText="Chat" className="text-brand bg-[#FBF4F6]" />
      <Button buttonText="Meet" className="text-brand bg-[#FBF4F6]" />
      <Button
        buttonText="Follow"
        className="text-brand border border-[#D9D9D9]"
      />
    </div>
  );
};

export default FeaturesButton;
