import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const InstructorData =[
    {
      id: 1,
      name: "Emily Dawson",
      designation: "Vocal Coach",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 2,
      name: "Marcus Rivera",
      designation: "Music Producer",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Sophie Nguyen",
      designation: "Piano Instructor",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 4,
      name: "Jamal Brooks",
      designation: "Sound Engineer",
      image: "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
      id: 5,
      name: "Ava Thompson",
      designation: "Songwriting Mentor",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
]

const Instructor = () => {
  return (
    <section className="relative flex justify-center items-center overflow-hidden">
      <WavyBackground className="flex flex-col justify-center items-center w-full max-w-7xl h-full mx-auto">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Meet Our Instructors
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex mt-4  items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={InstructorData}/>
        </div>
      </WavyBackground>
    </section>
  );
};

export default Instructor;
