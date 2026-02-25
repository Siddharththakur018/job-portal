import Carousel from "../../components/Carousel";
import { testimonials } from "../../data/testimonial";
import TestimonialCard from "../../components/TestimonialCard";
import Login from "./components/Login";

const Auth = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="bg-brand-blue flex justify-center items-center">
          <Carousel
            items={testimonials}
            renderItems={(item) => <TestimonialCard testimonial={item} />}
            mode="slide"
          />
        </div>
        <div>
            <Login />
        </div>
      </div>
    </>
  );
};

export default Auth;
