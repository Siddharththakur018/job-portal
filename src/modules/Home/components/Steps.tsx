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
    altText: "Tech",
    heading: "Tech",
  
  },
  {
    icon: Search,
    className: "text-blue-700 bg-blue-200",
    altText: "Marketing",
    heading: "Marketing",
    
  },
  {
    icon: FileText,
    className: "text-green-700 bg-green-200",
    altText: "Design",
    heading: "Design",

  },
  {
    icon: BriefcaseBusiness,
    className: "text-purple-700 bg-purple-200",
    altText: "Finance",
    heading: "Finance",
  },
];

const Steps = () => {
  return (
    <div className="">
      {/* Header */}
      <div className="mb-12">
        <h1 className="md:text-3xl text-2xl font-bold">
          Explore Categories
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-base md:text-base leading-7">
          Structured pathways for every discipline.
        </p>
        <p className="text-base flex items-center gap-3 text-brand-blue">
          View all categories <ArrowRight size={14}/>
        </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
