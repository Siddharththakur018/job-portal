export interface Job {
  _id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary: number;
  jobType: "Full-time" | "Part-time" | "Internship" | "Remote";
  slug: string;
  views: number;
  applicationsCount: number;
  expiryDate?: string;
  tags: string[];
  status: "open" | "closed";
  postedBy: string;
  createdAt: string;
  updatedAt: string;
}
