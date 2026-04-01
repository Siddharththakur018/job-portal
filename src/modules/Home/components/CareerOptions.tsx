import { useEffect, useState } from "react";
import { getCategoryStats } from "../../../services/job.service";
import type { Job } from "../../../types/job";

const CareerOptions = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getCategoryStats();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-bold">
          Featured Opportunities
        </h1>
        <div>
          {jobs.map((job, index) => {
            return (
              <div key={index} className="shadow-md rounded-md border-gray-200 border grid grid-rows-3">
                {job.title}
                {job.company} {job.location}
                {job.jobType}
                {job.salary}/year
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CareerOptions;
