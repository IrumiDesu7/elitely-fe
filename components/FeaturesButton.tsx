import { FC, useState } from 'react';
import Button from './base/Button';
const FeaturesButton: FC = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const followButtonLabel = isFollowed ? 'Following' : 'Follow';
  const followButtonStyle = isFollowed
    ? 'text-white bg-brand'
    : 'text-brand border border-[#D9D9D9]';
  return (
    <div className="flex items-center gap-[10px]">
      <Button buttonText="Chat" className="text-brand bg-[#FBF4F6]" />
      <Button buttonText="Meet" className="text-brand bg-[#FBF4F6]" />
      <Button
        buttonText={`${followButtonLabel}`}
        className={`${followButtonStyle}`}
        onClick={() => setIsFollowed(!isFollowed)}
      />
    </div>
  );
};

export default FeaturesButton;
