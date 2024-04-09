import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#ffffff7d] rounded-[15px] py-8 px-4 bg-blend-overlay flex flex-col justify-between items-center w-full md:w-max md:min-w-[50%] shadow-[12px_15px_15px_-2px_rgba(0,0,0,0.2)] md:mx-auto">
      {children}
    </div>
  );
};

export default Container;
