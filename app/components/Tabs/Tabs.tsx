"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';


// Define the type for the course , 
interface Course {
  title: string;
  price: string;
  category: string;
  type : string
}

// Define the course categories as a record of key-value pairs
const coursesData: Record<string, Course[]> = {
  popular: [
    { title: 'Design & Development', price: '$99', category: 'Popular', type:'Progrmaming', },
    { title: 'Marketing & Sales', price: '$120', category: 'Popular' , type: "Marketing", },
    { title: 'Business Management', price: '$130', category: 'Popular', type:"Finance" },
    { title: 'Design & Development', price: '$99', category: 'Popular', type:'Progrmaming', },
    { title: 'Marketing & Sales', price: '$120', category: 'Popular' , type: "Marketing", },
    { title: 'Business Management', price: '$130', category: 'Popular', type:"Finance" },
    { title: 'Design & Development', price: '$99', category: 'Popular', type:'Progrmaming', },
    { title: 'Marketing & Sales', price: '$120', category: 'Popular' , type: "Marketing", },
    { title: 'Business Management', price: '$130', category: 'Popular', type:"Finance" },
  ],
  newest: [
    { title: 'Data Science & AI', price: '$110', category: 'Newest', type:'Progrmaming', },
    { title: 'Programming & Development', price: '$115', category: 'Newest'  , type: "Marketing",},
    { title: 'Cybersecurity', price: '$140', category: 'Newest' , type:"Finance"},
    { title: 'Data Science & AI', price: '$110', category: 'Newest', type:'Progrmaming', },
    { title: 'Programming & Development', price: '$115', category: 'Newest'  , type: "Marketing",},
    { title: 'Cybersecurity', price: '$140', category: 'Newest' , type:"Finance"},
    { title: 'Data Science & AI', price: '$110', category: 'Newest', type:'Progrmaming', },
    { title: 'Programming & Development', price: '$115', category: 'Newest'  , type: "Marketing",},
    { title: 'Cybersecurity', price: '$140', category: 'Newest' , type:"Finance"},
  ],
  cheapest: [
    { title: 'Cybersecurity', price: '$50', category: 'Cheapest', type:'Progrmaming', },
    { title: 'Business Management', price: '$60', category: 'Cheapest'  , type: "Marketing",},
    { title: 'Data Science & AI', price: '$70', category: 'Cheapest' , type:"Finance"},
    { title: 'Cybersecurity', price: '$50', category: 'Cheapest', type:'Progrmaming', },
    { title: 'Business Management', price: '$60', category: 'Cheapest'  , type: "Marketing",},
    { title: 'Data Science & AI', price: '$70', category: 'Cheapest' , type:"Finance"},
    { title: 'Cybersecurity', price: '$50', category: 'Cheapest', type:'Progrmaming', },
    { title: 'Business Management', price: '$60', category: 'Cheapest'  , type: "Marketing",},
    { title: 'Data Science & AI', price: '$70', category: 'Cheapest' , type:"Finance"},
  ],
};

const CourseTabs: React.FC = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState<'popular' | 'newest' | 'cheapest'>('popular');
  const [showAll, setShowAll] = useState(false); // State to control "View More" Button

  // Function to handle tab click
  const handleTabClick = (tab: 'popular' | 'newest' | 'cheapest') => {
    setActiveTab(tab);
    setShowAll(false);
 };

  // Get the courses to display based on the active tab
  const coursesToDisplay = showAll
    ? coursesData[activeTab]
    : coursesData[activeTab].slice(0, 3); // Show only 3 courses initially


  // Get the position of the active tab
  const getTabPosition = (tab: 'popular' | 'newest' | 'cheapest') => {
    if (tab === 'popular') return 0;
    if (tab === 'newest') return 1;
    if (tab === 'cheapest') return 2;
    return 0;
  };

  return (
    <div className=" mx-auto  mt-16 max-w-screen overflow-hidden" id='services'>
      <h3 className='text-center text-4xl font-semibold font-roboto'>Courses</h3>
      <p className='text-center text-base'> Your Ultimate Guide to learning</p>
      {/* Tab Navigation */}
      <div className="relative md:w-[40%]  mx-auto  mt-6">
        <div className="flex justify-around">
          <button
        
            className={`px-4 py-2   ${
              activeTab === 'popular'
              ? 'bg-white text-black'
                : 'bg-white text-black'
            } rounded-md transition-all hover:text-black`}
            onClick={() => handleTabClick('popular')}
          >
          Popular
          </button>
          <button
            className={`px-4 py-2  ${
              activeTab === 'newest'
                ? 'bg-white text-black' 
                : 'bg-white text-black'
            } rounded-md transition-all hover:text-black`}
            onClick={() => handleTabClick('newest')}
          >
            Recommended
          </button>
          <button
         
            className={`px-4 py-2  ${
              activeTab === 'cheapest'
              ? 'bg-white text-black'
              : 'bg-white text-black'
          } rounded-md transition-all hover:text-black`} 
            onClick={() => handleTabClick('cheapest')}
          >
            Best Price
          </button>
        </div>

        {/* Underline Animation */}
        <span
          className="absolute bottom-0 left-0 h-[1px] bg-black transition-transform duration-300"
          style={{
            width: '33.33%',
            transform: `translateX(${getTabPosition(activeTab) * 100}%)`,
          }}
        ></span>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-0">
  {coursesToDisplay.map((course, index) => (
    <div
      key={index}
      className="bg-[#F7F7F7] shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
    >
      {/* Course Image */}
      <Image
      width="416" height="300"
        src={`/Image${index + 1}.svg`} 
        alt={course.title}
        className="w-[100%] h-56 object-cover  mb-4"
      />
<div className='p-6 '>
      {/* Course Details */}
      <div className="flex flex-col flex-grow">
        <div className='flex items-center justify-between'>        <p className="text-sm text-gray-500 mb-1">{course.type}</p>
        <Image width="48" height="24"src='/Star.svg'alt="star-rating" className="text-sm text-gray-500 mb-1"></Image></div>

       
        <h4 className="text-xl font-semibold mb-2 text-white">{course.title}</h4>
        <p className="text-sm text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero ut
          tenetur aliquid?
        </p>
        <div className='flex justify-between items-center'>
        <Button 
        variant="outline"
        className="">
          Enroll Now
        </Button>
        <p className="text-lg  font-medium text-gray-700 ">
          Price: {course.price}
        </p></div>
      </div></div>
    </div>
  ))}
</div>

{/* View More Button */}
{(!showAll||showAll) && (
        <div className="text-center mt-6">
          <Button
          variant="outline"
            className=""
            onClick={() => setShowAll(!showAll)}
          >
            {showAll? "View Fewer Courses" : "View more Courses"}
          </Button>
        </div>
      )}



    </div>
  );
};

export default CourseTabs;