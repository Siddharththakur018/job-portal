import React from "react";
import {
  User,
  Search,
  FileText,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

const data = [
  {
    icon: User,
    className: "text-orange-700 bg-orange-200",
    altText: "Create account icon",
    heading: "Tech & Engineering",
    text: "Sign up in minutes and build your professional profile to start exploring job opportunities.",
  },
  {
    icon: Search,
    className: "text-blue-700 bg-blue-200",
    altText: "Search jobs icon",
    heading: "Search for Jobs",
    text: "Discover jobs that match your skills, experience, and career goals using smart filters.",
  },
  {
    icon: FileText,
    className: "text-green-700 bg-green-200",
    altText: "Upload CV icon",
    heading: "Upload Your CV",
    text: "Add your updated resume so employers can easily find you and review your qualifications.",
  },
  {
    icon: BriefcaseBusiness,
    className: "text-purple-700 bg-purple-200",
    altText: "Get hired icon",
    heading: "Get Hired",
    text: "Apply with confidence, connect with top employers, and land the job you deserve.",
  },
];

const Steps = () => {
  return (
    <div className="">
      {/* Header */}
      <div className="mb-12">
        <h1 className="md:text-3xl text-2xl font-bold">
          Browse by Category
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-base md:text-base leading-7">
          Explore jobs across different industries and find your niche.
        </p>
        <p className="text-base flex items-center gap-3 text-brand-blue">
          View all categories <ArrowRight size={14}/>
        </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="shadow-lg p-6 rounded-lg flex flex-col hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center mb-4 rounded-full ${item.className}`}
              >
                <Icon size={30} />
              </div>

              <h2 className="font-bold text-lg mb-2">{item.heading}</h2>
              <p className="text-gray-500">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
