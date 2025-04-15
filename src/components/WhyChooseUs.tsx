"use client";

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Expert Instructors",
    description:
      "Learn from top-tier musicians, producers, and vocal coaches with real industry experience. Our instructors include award-winning artists who bring professional insights into every lesson. You’re not just watching tutorials — you're gaining knowledge from the best in the business.",
  },
  {
    title: "Hands-On Learning",
    description:
      "Each course is filled with practical assignments, jam sessions, and real-world music projects. Whether you're making beats, recording vocals, or playing guitar, you'll be actively building your skills. We focus on doing, not just watching.",
  },
  {
    title: "Industry-Ready Curriculum",
    description:
      "Our content is designed to match the current trends and tools of the modern music industry. From DAWs like Ableton and FL Studio to live performance setups, you’ll gain skills that matter. Be job- and gig-ready from day one.",
  },
  {
    title: "Flexible & Self-Paced",
    description:
      "No deadlines, no pressure. Learn at your own speed with 24/7 access to all course materials. Whether you're balancing school, work, or late-night creativity, our platform fits into your schedule without compromise.",
  },
  {
    title: "Supportive Music Community",
    description:
      "You're not on this journey alone. Connect with fellow learners, instructors, and music enthusiasts in our vibrant community. Share your work, get feedback, collaborate on projects, and grow together in a safe and inspiring space.",
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
