import type { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaOptionsType } from "embla-carousel";

interface CarouselProps<T> {
  items: T[];
  renderItems: (item: T) => ReactNode;
  direction?: "left" | "right";
  mode?: "scroll" | "slide";
}

export default function Carousel<T>({
  items,
  renderItems,
  direction = "left",
  mode = "scroll",
}: CarouselProps<T>) {
  const options:EmblaOptionsType =
    mode === "slide"
      ? {
          loop: true,
          align: "center",
        }
      : {
          loop: true,
          dragFree: true, 
        };
  const plugins = mode === "slide" ? [
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]
      : [
          AutoScroll({
            speed: 0.5,
            direction: direction === "right" ? "backward" : "forward",
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ];
  const [emblaRef] = useEmblaCarousel(options, plugins);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex gap-6">
        {items.map((item, index) => (
          <div key={index} className={
        mode === "slide"
          ? "flex-[0_0_100%] flex justify-center items-center px-10"
          : "flex-[0_0_auto]"
      }>
            {renderItems(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
