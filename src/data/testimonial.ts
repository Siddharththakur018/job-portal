export interface Testimonial {
  name: string;
  role: string;
  message: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager at BrightAds",
    message:
      "I landed my dream marketing role within two weeks of signing up. The job recommendations were incredibly accurate and saved me hours of searching.",
    image: "/images/sarah.jpg",
  },
  {
    name: "David Lee",
    role: "Startup Founder",
    message:
      "Hiring through this platform was seamless. We found qualified candidates faster than any other job board we've used.",
    image: "/images/david.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Frontend Developer",
    message:
      "The one-click apply feature made the process so smooth. I received interview calls within days of applying.",
    image: "/images/priya.jpg",
  },
  {
    name: "Michael Brown",
    role: "HR Manager at TechCore",
    message:
      "The applicant filtering tools are powerful and easy to use. It helped us shortlist top talent in minutes instead of days.",
    image: "/images/michael.jpg",
  },
  {
    name: "Ayesha Khan",
    role: "Remote UX Designer",
    message:
      "I was specifically looking for remote opportunities, and this platform connected me with global companies effortlessly.",
    image: "/images/ayesha.jpg",
  },
  {
    name: "James Wilson",
    role: "Data Analyst",
    message:
      "The job alerts were spot on. I never missed an opportunity that matched my skills and experience.",
    image: "/images/james.jpg",
  },
];
