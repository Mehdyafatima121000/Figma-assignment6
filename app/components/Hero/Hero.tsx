// components/Hero.js

export default function Hero() {
  return (
    <div className="flex items-center justify-between w-full h-[500px] p-8">
      {/* Text Section (Left Side) */}
      <div className="w-full lg:w-1/2 h-full pl-[60px] pr-[80px] flex flex-col items-start justify-center">
        {/* Main Heading */}
        <h1 className="font-roboto text-[56px] font-bold leading-[67.2px] text-left">
          Learn new skills online with ease
        </h1>

        {/* Subheading (h3) with Text Styles */}
        <h3 className="font-roboto text-[18px] font-normal leading-[27px] text-left text-black">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors
        </h3>

        {/* Action Buttons */}
        <div className="mt-4 space-x-4">
          <button className="px-6 py-2 border-2 bg-black text-white rounded-md">
            Start Learning Now
          </button>
          <button className="px-6 py-2 border-2 border-[#676767] bg-white text-black rounded-md">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Image Section (Right Side) */}
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
        <img
          src="/girl.jpg"
          alt="girl"
          className="w-[340px] h-[400px] object-cover"
        />
      </div>
    </div>
  );
}
