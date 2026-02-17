import CareerOptions from "./components/CareerOptions";
import LeftSlider from "./components/LeftSlider";
import Steps from "./components/Steps";
import { MapPin, Search } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto 2xl:max-w-[1600px] h-[60vh] flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-7xl font-bold leading-20">
            Find Your <span className="text-brand-blue">Dream Job </span> Faster
          </h1>
          <p className="leading-10 text-brand-gray">
            Discover exclusive opportunities at the world's leading companies
            with our AI-
          </p>
          <p className="text-brand-gray">
            powered matching platform. Your next career move is just a click
            away.
          </p>
          <div className="mt-4 shadow-xl py-5 px-4 rounded-md border border-gray-100 flex">
            <div className="flex items-center gap-4">
              <Search size={20} className="text-gray-400" />
              <input
                className="w-96 text-lg focus:ring-0 outline-none text-gray-400"
                type="text"
                placeholder="Job title or keyword"
              />
            </div>
            <div className="self-stretch bg-gray-200 w-0.5 mr-2"></div>
            <div className="flex items-center gap-4">
              <MapPin size={20} className="text-gray-400" />
              <input
                className="w-96 text-lg focus:ring-0 outline-none text-gray-400"
                type="text"
                placeholder="City or Remote"
              />
            </div>
            <button className="flex items-center gap-2 bg-brand-blue border border-transparent hover:border-brand-blue hover:text-brand-blue hover:bg-white cursor-pointer duration-700 transition text-white py-3 px-4 rounded-md font-md">
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <LeftSlider />
      </div>
      <div className="max-w-7xl mx-auto 2xl:max-w-[1600px] mt-10">
        <Steps />
      </div>
      <div className="max-w-7xl mx-auto 2xl:max-w-[1600px] mt-10">
        <CareerOptions />
      </div>
    </>
  );
};

export default Home;
