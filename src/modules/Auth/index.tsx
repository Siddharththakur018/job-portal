import React from "react";
import Carousel from "../../components/Carousel";
import { testimonials } from "../../data/testimonial";
import TestimonialCard from "../../components/TestimonialCard";
import Login from "./components/Login";

const Auth = () => {
  return (
    <>
      <div className="flex">
        <div className="bg-brand-blue flex-1">
          <Carousel
            items={testimonials}
            renderItems={(item) => <TestimonialCard testimonial={item} />}
          />
        </div>
        <div className="flex-1">
            <Login />
        </div>
      </div>
    </>
  );
};

export default Auth;
