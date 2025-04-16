import FeaturedCoursesCard from "@/components/FeaturedCoursesCard";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialSection from "@/components/TestimonialSection";
import UpcommingWebinar from "@/components/UpcommingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home () {
  return (
    <main >
      <HeroSection/>
      <FeaturedCoursesCard/>
      <WhyChooseUs/>
      <TestimonialSection/>
      <UpcommingWebinar/>
      <Instructor/>
    </main>
  )
}

