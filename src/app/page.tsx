import Hero from "@/components/Hero";
import WhyDot from "@/components/WhyDot";
import WhatIsDot from "@/components/WhatIsDot";
import ProgramLevels from "@/components/ProgramLevels";
import HowAndWhy from "@/components/HowAndWhy";
import Offerings from "@/components/Offerings";
import MaterialsIncluded from "@/components/MaterialsIncluded";
import ProgressTracking from "@/components/ProgressTracking";
import Benefits from "@/components/Benefits";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import LatestBlog from "@/components/LatestBlog";
import Faq from "@/components/Faq";
import PartnerSection from "@/components/PartnerSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyDot />
      <WhatIsDot />
      <ProgramLevels />
      <HowAndWhy />
      <Offerings />
      <MaterialsIncluded />
      <ProgressTracking />
      <Benefits />
      <Insights />
      <Testimonials />
      <LatestBlog />
      <Faq />
      <PartnerSection />
    </>
  );
}
