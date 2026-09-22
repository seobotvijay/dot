import Hero from "@/components/Hero";
import WhatIsDot from "@/components/WhatIsDot";
import ProgramLevels from "@/components/ProgramLevels";
import HowAndWhy from "@/components/HowAndWhy";
import Offerings from "@/components/Offerings";
import ProgressTracking from "@/components/ProgressTracking";
import Benefits from "@/components/Benefits";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import PartnerSection from "@/components/PartnerSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsDot />
      <ProgramLevels />
      <HowAndWhy />
      <Offerings />
      <ProgressTracking />
      <Benefits />
      <Insights />
      <Testimonials />
      <PartnerSection />
    </>
  );
}
