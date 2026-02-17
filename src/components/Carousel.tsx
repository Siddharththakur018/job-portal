import type { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

interface CarouselProps<T> {
  items: T[];
  renderItems: (item: T) => ReactNode;
  direction?: "left" | "right";
}

export default function Carousel<T>({
  items,
  renderItems,
  direction = "left",
}: CarouselProps<T>) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 0.5, // ⭐ LOWER = slower
        direction: direction === "right" ? "backward" : "forward",
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex-[0_0_auto]">
            {renderItems(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
