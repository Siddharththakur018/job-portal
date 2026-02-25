import React from "react";
import type { Testimonial } from "../data/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <>
      <div className="relative w-full py-16 px-10 
  rounded-2xl 
  bg-white/10 
  backdrop-blur-2xl 
  border border-white/30 
  shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
  before:absolute before:inset-0 
  before:rounded-2xl 
  before:bg-gradient-to-br 
  before:from-white/20 before:to-transparent 
  before:pointer-events-none
">
        <p className="text-white italic mb-4">"{testimonial.message}"</p>

        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-white">{testimonial.name}</p>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default TestimonialCard;
