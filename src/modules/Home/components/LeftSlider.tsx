import Carousel from "../../../components/Carousel";

const categories = [
  { id: 1, label: "Astronomy Enthusiast" },
  { id: 2, label: "Urban Gardener" },
  { id: 3, label: "Travel Blogger" },
  { id: 4, label: "Culinary Explorer" },
  { id: 5, label: "Vintage Collector" },
  { id: 6, label: "Street Photographer" },
  { id: 7, label: "Podcast Host" },
  { id: 8, label: "Creative Writer" },
  { id: 9, label: "Music Producer" },
  { id: 10, label: "Fashion Designer" },
  { id: 11, label: "Adventure Seeker" },
  { id: 12, label: "Fitness Coach" },
  { id: 13, label: "Eco Activist" },
  { id: 14, label: "Board Game Designer" },
  { id: 15, label: "Film Critic" },
  { id: 16, label: "Language Enthusiast" },
  { id: 17, label: "Tech Reviewer" },
  { id: 18, label: "Meditation Guide" },
  { id: 19, label: "Event Organizer" },
  { id: 20, label: "DIY Expert" },
  { id: 21, label: "Pet Trainer" },
  { id: 22, label: "Illustrator" },
  { id: 23, label: "Coffee Connoisseur" },
  { id: 24, label: "Charity Volunteer" },
  { id: 25, label: "Virtual Reality Explorer" },
];

const LeftSlider = () => {
  return (
    <>
      <Carousel
        items={categories}
        direction="left"
        renderItems={(item) => (
          <button className="whitespace-nowrap rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">
            {item.label}
          </button>
        )}
      />
    </>
  );
};

export default LeftSlider;
