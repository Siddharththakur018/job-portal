import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getCategoryStats } from "../../../services/job.service";
import type { CategoryStat } from "../../../types/categorystat";
import { categoryIcons } from "../../../constants/categoryIcon";

const Steps = () => {
  const [data, setData] = useState<CategoryStat[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCategoryStats();
        setData(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="">
      {/* Header */}
      <div  className="max-w-7xl mx-auto 2xl:max-w-[1600px] mt-10 mb-12">
        <h1 className="md:text-3xl text-2xl font-bold">Explore Categories</h1>
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-base md:text-base leading-7">
            Structured pathways for every discipline.
          </p>
          <p className="text-base flex items-center gap-3 text-brand-blue">
            View all categories <ArrowRight size={14} />
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {data.map((item, index) => {
            const Icon = categoryIcons[item._id as keyof typeof categoryIcons];

            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 cursor-pointer border border-gray-100"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-brand-blue mb-4">
                  {Icon && <Icon size={22} />}
                </div>

                <p className="text-lg font-semibold text-gray-800 mb-1">
                  {item._id}
                </p>

                <p className="text-sm text-gray-500">{item.count} jobs open</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Steps;
