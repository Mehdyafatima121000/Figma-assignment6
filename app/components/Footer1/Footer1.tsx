import React from 'react';

const Footer1 = () => {
  return (
    <div className="max-w-screen h-auto bg-[#F7F7F7] flex flex-col md:flex-row items-center justify-between px-6 py-12">
      {/* Left Section (Text) */}
      <div className="w-full max-w-[100%] md:w-1/4 flex items-center justify-center md:text-left">
        <p className="font-roboto text-black font-bold text-[20px] md:text-[24px] text-center md:text-left px-4 md:px-6 lg:px-8">
          Trusted by 2000+ companies <br /> worldwide.
        </p>
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-center md:justify-start gap-6">
        {/* Each logo */}
        <div className="flex items-center justify-center">
          <img src="/Airbnb Logo.png" alt="logo" className="w-[123.8px] h-[38.52px]" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/Airbnb Logo.22.svg" alt="logo" className="w-[123.8px] h-[38.52px]" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/Airbnb Logo3.svg" alt="logo" className="w-[123.8px] h-[38.52px]" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/Airbnb Logo4.svg" alt="logo" className="w-[123.8px] h-[38.52px]" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/Airbnb Logo5.svg" alt="logo" className="w-[123.8px] h-[38.52px]" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/Airbnb Logo6.svg" alt="logo" className="w-[123.8px] h-[38.52px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer1;
