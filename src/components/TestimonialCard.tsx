import React from "react";
import type { Testimonial } from "../data/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <>
      <div className="w-80 p-6 bg-white rounded-xl shadow-md">
        <p className="text-gray-700 mb-4">"{testimonial.message}"</p>

        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
