"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"


const Courses = () => {
  // State to manage the visibility of the courses
  const [showAll, setShowAll] = useState(false);

  // Function to toggle the visibility of courses
  const toggleCourses = () => {
    setShowAll(!showAll);
  };

  // Course data for demonstration 
  const courses = [
    'Design & Development',
    'Marketing & Sales',
    'Business Management',
    'Data Science & AI',
    'Programming & Development',
    'Cybersecurity',
    'Data Science & AI',
    'Programming & Development',
    'Cybersecurity',
    'Data Science & AI',
    'Programming & Development',
    'Cybersecurity',
  ];
  const imageArray = [
    "/course1.svg",
    "/course2.svg",
    "/course3.svg",
    "/course4.svg",
    "/course5.svg",
    "/course6.svg",
    "/course7.svg",
    "/course8.svg",
    "/course9.svg",
    "/course5.svg",
    "/course2.svg",
    "/course7.svg",
    
  ];
  
  return (
    <div className="container mx-auto px-4 py-12" id='courses'>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold font-roboto mb-4">Explore Courses By Category</h1>
        <p className="text-xl text-gray-600">Discover a wide range of courses covering various subjects, taught by expert instructors.</p>
      </div>

      {/* Grid for larger screens */}
      <div className="hidden md:hidden lg:grid lg:grid-cols-3 lg:grid-cols-3 gap-8">
        
        {courses.slice(0, showAll ? courses.length : 9).map((course, index) => (
            
          <div key={index} className="bg-[#F7F7F7] shadow-lg  p-6 transform transition-transform hover:scale-105 hover:shadow-xl flex items justify-center">
            <div className="w-20 h-20 bg-white rounded-md mb-4">
           
        <div key={index} className="flex justify-center items-center">
          <Image 
            src={imageArray[index]} 
            alt={`Image ${course}`} 
            width={30} 
            height={20} 
            className="object-cover mt-6" 
          />
        </div>
      
            </div>
            <div className='flex flex-col m-4'>
            <h3 className="text-xl font-semibold mb-2 text-black">{course}</h3>
            <p className="text-gray-500">50+ Courses Available</p></div>
          </div>
        ))}
      </div>

      {/* Grid for larger screens */}
      <div className="hidden md:grid md:grid-cols-2 md:grid-cols-2 gap-8 lg:hidden">
        {courses.slice(0, showAll ? courses.length : 6).map((course, index) => (
            
          <div key={index} className="bg-[#F7F7F7] shadow-lg  p-6 transform transition-transform hover:scale-105 hover:shadow-xl flex items justify-center">
            <div className="w-20 h-20 bg-white rounded-md mb-4">
            <div key={index} className="flex justify-center items-center">
          <Image 
            src={imageArray[index]} 
            alt={`Image ${course}`} 
            width={30} 
            height={20} 
            className="object-cover mt-6" 
          />
        </div>
            </div>
            <div className='flex flex-col m-4'>
            <h3 className="text-xl font-semibold mb-2">{course}</h3>
            <p className="text-gray-500">50+ Courses Available</p></div>
          </div>
        ))}
      </div>

      {/* Grid for smaller screens (mobile/tablet) */}
      <div className="md:hidden grid grid-cols-1 gap-8">
        {courses.slice(0, showAll ? courses.length : 3).map((course, index) => (
          <div key={index} className="bg-[#F7F7F7] shadow-lg  p-6 transform transition-transform hover:scale-105 hover:shadow-xl flex items justify-center">
          <div className="w-20 h-20 bg-white rounded-md mb-4">
          <div key={index} className="flex justify-center items-center">
          <Image 
            src={imageArray[index]} 
            alt={`Image ${course}`} 
            width={30} 
            height={20} 
            className="object-cover mt-6" 
          />
        </div>
          </div>
          <div className='flex flex-col m-4'>
          <h3 className="text-xl font-semibold mb-2">{course}</h3>
          <p className="text-gray-500">50+ Courses Available</p></div>
        </div>
        ))}
      </div>

      {/* Button to show more courses */}
      <div className="mt-8 text-center">
        <Button
      variant="outline" 
          onClick={toggleCourses}
          // className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-black hover:text-white transition-colors duration-300 border-2 border-black"
        >
          {showAll ? 'View Fewer Courses' : 'View All Courses'}
        </Button>
      </div>
    </div>
  );
};

export default Courses;