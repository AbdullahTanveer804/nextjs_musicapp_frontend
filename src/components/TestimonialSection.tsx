"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "This platform completely transformed how I approach music. The lessons are well-structured and easy to follow, even for a beginner like me. I never thought I’d be producing my own beats in just a few weeks!",
    name: "Samantha Lee",
    title: "Aspiring Music Producer",
  },
  {
    quote:
      "I’ve taken vocal lessons before, but nothing compares to the personalized tips I got here. My confidence has skyrocketed and I’m now recording covers for YouTube!",
    name: "Daniel Rhodes",
    title: "Vocal Student",
  },
  {
    quote:
      "As a self-taught guitarist, I was skeptical at first—but this course filled in all the gaps. The instructors are phenomenal and the practice material is gold.",
    name: "Liam Carter",
    title: "Guitarist & Songwriter",
  },
  {
    quote:
      "The hands-on approach is what really sets this site apart. Every lesson pushed me creatively, and now I’m working on my first album with confidence.",
    name: "Anaya Malik",
    title: "Indie Artist",
  },
  {
    quote:
      "I joined just to brush up on my music theory, but I stayed for the community. Everyone's so supportive, and the feedback I’ve gotten has been invaluable.",
    name: "Jonas Park",
    title: "Composer & Pianist",
  },
];
const TestimonialSection = () => {
  return (
    <section className="h-svh w-full flex flex-col justify-center items-center bg-white dark:bg-black overflow-hidden relative">
        <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="text-center my-12 text-3xl font-extrabold">
        <h1>Voice of Success</h1>
      </div>
      <div className="flex justify-items-center items-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
