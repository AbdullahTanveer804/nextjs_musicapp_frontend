"use client";

import React from "react";
import { HoverEffect } from "./ui/card-hover-effect.tsx";

const webinars = [
  {
    title: "Breaking Into the Music Industry",
    description:
      "Learn the ins and outs of launching your music career from top industry experts. Discover networking tips, platform strategies, and how to get noticed as an independent artist.",
    slug: "breaking-into-music-industry",
    isfeatured: true,
  },
  {
    title: "Mastering Vocals: Live Demo with a Pro",
    description:
      "Join a live session with a professional vocal coach to explore warm-ups, vocal control techniques, and how to find your unique voice.",
    slug: "mastering-vocals-live-demo",
    isfeatured: false,
  },
  {
    title: "Music Production on a Budget",
    description:
      "Discover how to build your home studio without breaking the bank. Learn about affordable gear, free software, and efficient workflows.",
    slug: "music-production-budget",
    isfeatured: false,
  },
  {
    title: "Mixing & Mastering 101",
    description:
      "A beginner-friendly guide to understanding EQ, compression, reverb, and the full audio polishing process for your tracks.",
    slug: "mixing-mastering-101",
    isfeatured: true,
  },
  {
    title: "How to Write Catchy Hooks",
    description:
      "Explore songwriting strategies for writing memorable hooks and choruses that stick in your listener's mind.",
    slug: "how-to-write-hooks",
    isfeatured: false,
  },
  {
    title: "Monetizing Your Music Online",
    description:
      "Learn how to turn your passion into income through streaming platforms, licensing, merch, and Patreon.",
    slug: "monetizing-music-online",
    isfeatured: true,
  },
];

const UpcommingWebinar = () => {
  return (
    <section className="bg-[#212529] py-[75px] h-svh">
      <div className="text-center">
        <h1 className="text-base font-semibold tracking-wide  text-blue-500">
          Upcoming Webinars
        </h1>
        <p className="text-3xl m-2 tracking-wide font-extrabold uppercase">
          Enhance Your Musical Journey
        </p>
      </div>

      <div className="m-2">
        <div>
          <HoverEffect
            items={webinars.map((item) => ({
              title: item.title,
              description: item.description,
              link: `/webinars/${item.slug}`,
            }))}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-2">
        <button
          className="bg-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition 
          duration-300 ease-in-out"
        >
          View All Webinars
        </button>
      </div>
    </section>
  );
};

export default UpcommingWebinar;
