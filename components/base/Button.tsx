import { FC } from 'react';

interface ButtonProps {
  buttonText: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ buttonText, className, onClick }) => {
  return (
    <button
      className={`w-full font-semibold rounded-[100px] py-[8.5px] ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
