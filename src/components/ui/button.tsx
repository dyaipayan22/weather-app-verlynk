import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="rounded-[40px] bg-[#3f43aa] h-10 px-4 text-white"
    >
      {label}
    </button>
  );
};

export default Button;
