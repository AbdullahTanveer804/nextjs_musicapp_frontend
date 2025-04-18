"use client";

import React from "react";
import coursesdata from "@/data/music_courses.json";
import { NextPage } from "next";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const coursesPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-black pt-36 py-12">
      <h1 className="text-center text-3xl font-extrabold">
        All Courses({coursesdata.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {coursesdata.courses.map((data: Courses) => (
          <CardContainer className="inter-var m-4 mb-4">
            <CardBody
              className="bg-gray-50 relative group/card  dark:hover:shadow-2xl 
            dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]
             border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {data.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {data.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  quality={10}
                  src={data.image}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                ></Image>
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default coursesPage;
