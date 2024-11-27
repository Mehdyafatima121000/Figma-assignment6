"use client";
import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const TestimonialCard: React.FC = () => {
  const testimonials = [
    {
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      designation: "Software Engineer",
      review:
        "This service exceeded my expectations. I would recommend it to everyone!",
      rating: 5,
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      designation: "Product Manager",
      review:
        "Fantastic experience! The team was professional and delivered on time.",
      rating: 4,
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "James Brown",
      designation: "Designer",
      review:
        "The design was top-notch. They really understood what I was looking for.",
      rating: 5,
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Sarah Johnson",
      designation: "Developer",
      review: "Very responsive and easy to work with. Highly recommended!",
      rating: 4,
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Mike Williams",
      designation: "Entrepreneur",
      review:
        "Great value for money. I am extremely satisfied with the results.",
      rating: 5,
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Anna Taylor",
      designation: "HR Manager",
      review: "Professional service with a personal touch. Simply amazing.",
      rating: 5,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const startIndex = currentPage * testimonialsPerPage;

  // Using useMemo for performance optimization
  const currentTestimonials = useMemo(
    () => testimonials.slice(startIndex, startIndex + testimonialsPerPage),
    [startIndex]
  );

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const isPreviousButtonDisabled = currentPage === 0;
  const isNextButtonDisabled = startIndex + testimonialsPerPage >= testimonials.length;

  return (
    <div className="relative bg-[#F7F7F7] p-8" id="testimonial">
      <h2 className="text-left text-4xl ml-4 m-2 font-medium text-black">
        Customer Testimonials
      </h2>
      <p className="text-left text-xl m-4 text-black">
        See what our customers have to say about us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {currentTestimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="p-6 bg-[#F7F7F7] border border-black w-72 md:w-80 lg:w-80 xl:w-[420px] 2xl:w-[420px] rounded-sm shadow-lg"
          >
            <CardHeader>
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={i < testimonial.rating ? "black" : "gray"}
                    className="w-6 h-6"
                    aria-hidden="true"
                    role="img"
                    aria-label={`Rating: ${i < testimonial.rating ? 'filled' : 'empty'} star`}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-left text-gray-800 text-lg italic mb-6">{`"${testimonial.review}"`}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-16 h-16 rounded-full border border-black mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-black">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.designation}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${index === currentPage ? "bg-black" : "bg-gray-300"}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6">
        <div className="absolute right-8 bottom-8 text-3xl flex space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={isPreviousButtonDisabled}
            className={`px-4 py-4 text-[22px] text-black ${isPreviousButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:text-gray-500"}`}
            aria-label="Previous Page"
          >
            ←
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(testimonials.length / testimonialsPerPage) - 1))
            }
            disabled={isNextButtonDisabled}
            className={`px-2 py-4 text-[22px] text-black ${isNextButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:text-gray-500"}`}
            aria-label="Next Page"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
