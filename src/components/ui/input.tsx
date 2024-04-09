import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  register: UseFormRegisterReturn<string>;
}

const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  placeholder,
  disabled,
  register,
}) => {
  return (
    <div className="w-full relative flex flex-col">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
        className={`h-10 w-full bg-white/30 rounded-[40px] outline-none border  p-4 font-medium border-gray-500`}
      />
    </div>
  );
};

export default Input;
