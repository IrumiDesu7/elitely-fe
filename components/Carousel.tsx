import { FC } from 'react';

const Carousel: FC = () => {
  return (
    <div className="flex gap-2 justify-center py-2 my-2">
      <div className="w-2 h-2 bg-brand rounded-full"></div>
      <div className="w-2 h-2 bg-grey-content rounded-full"></div>
    </div>
  );
};

export default Carousel;
