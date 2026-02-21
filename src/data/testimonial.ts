export interface Testimonial {
  name: string;
  role: string;
  message: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    message: "This product completely changed our workflow!",
    image: "/images/sarah.jpg",
  },
  {
    name: "David Lee",
    role: "Founder",
    message: "Excellent support and amazing experience.",
    image: "/images/david.jpg",
  },
];
