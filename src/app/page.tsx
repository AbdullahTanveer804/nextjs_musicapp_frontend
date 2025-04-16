import FeaturedCoursesCard from "@/components/FeaturedCoursesCard";
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/TestimonialSection";
import UpcommingWebinar from "@/components/UpcommingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home () {
  return (
    <main className="">
      <HeroSection/>
      <FeaturedCoursesCard/>
      <WhyChooseUs/>
      <TestimonialSection/>
      <UpcommingWebinar/>
    </main>
  )
}

