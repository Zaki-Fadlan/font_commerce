"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
const eventList = [
  {
    id: 1,
    name: "Halloween",
    isActive: true,
    image: "https://dummyjson.com/image/2560x720/282828",
    imageMobile: "https://dummyjson.com/image/1920x1920/282828",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa beatae deserunt voluptatum maxime neque optio quasi quod, nisi blanditiis quam facilis accusamus molestias libero, cupiditate rem impedit a enim.",
  },
  {
    id: 2,
    name: "Eid Mubarak",
    isActive: true,
    image: "https://dummyjson.com/image/2560x720/282828",
    imageMobile: "https://dummyjson.com/image/1920x1920/282828",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa beatae deserunt voluptatum maxime neque optio quasi quod, nisi blanditiis quam facilis accusamus molestias libero, cupiditate rem impedit a enim.",
  },
  {
    id: 3,
    name: "Valentine",
    isActive: false,
    image: "https://dummyjson.com/image/3840x720/282828",
    imageMobile: "https://dummyjson.com/image/1920x1920/282828",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa beatae deserunt voluptatum maxime neque optio quasi quod, nisi blanditiis quam facilis accusamus molestias libero, cupiditate rem impedit a enim.",
  },
];
export function MainCarousel() {
  return (
    <>
      <Carousel
        className="w-full lg:hidden block sm:w-full rounded-2xl overflow-hidden relative shadow-lg mb-8"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {eventList
            .filter((event) => event.isActive)
            .map((event, index) => (
              <CarouselItem key={index}>
                <Image
                  loader={() => event.imageMobile + `?text=${event.name}`}
                  src="/profile.png"
                  width="250"
                  height="250"
                  alt="Picture of the author"
                  className="w-full"
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        className="w-full hidden lg:block sm:w-full rounded-2xl overflow-hidden relative shadow-lg mb-8"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {eventList
            .filter((event) => event.isActive)
            .map((event, index) => (
              <CarouselItem key={index}>
                <Image
                  loader={() => event.image + `?text=${event.name}`}
                  src="/profile.png"
                  width="0"
                  height="0"
                  alt="Picture of the author"
                  className="w-full object-fill"
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
