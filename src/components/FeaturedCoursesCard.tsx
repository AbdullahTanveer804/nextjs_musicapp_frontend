"use client";

import React from "react";
import coursedata from "@/data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
const FeaturedCoursesCard = () => {
  const featuredCourses = coursedata.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <section className="bg-[#212529] py-[75px] h-full">
      <div className="text-center">
        <h1 className="text-base font-semibold tracking-wide  text-blue-500">
          Freatured Coueses
        </h1>
        <p className="text-3xl m-2 tracking-wide uppercase font-extrabold">
          Learn With the Best
        </p>
      </div>

      <div className="m-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((data: Course) => (
            <div key={data.id} className="flex  justify-center ">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] max-w-sm overflow-hidden 
                    h-full  bg-white dark:bg-zinc-900"
              >
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow ">
                  <h1 className="text-base font-semibold tracking-wide">
                    {data.title}
                  </h1>
                <span className="pt-2">{data.description}</span>
                <br />
                <Link href={`courses/${data.slug}`} className="underline">
                Read More
                </Link>
                </div>
                
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-12">
        <button
          className="bg-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition 
            duration-300 ease-in-out"
        >
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default FeaturedCoursesCard;
