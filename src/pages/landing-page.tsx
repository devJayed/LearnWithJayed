import { PageSeo } from "@/components/seo/page-seo";
import { AvailableBatchesSection } from "@/features/landing/components/available-batches-section";
import { ExamsSection } from "@/features/landing/components/exams-section";
import { FaqSection } from "@/features/landing/components/faq-section";
import { HeroSection } from "@/features/landing/components/hero-section";
// import { LearningProcessSection } from "@/features/landing/components/learning-process-section";
import { LectureSheetSection } from "@/features/landing/components/lecture-sheet-section";
import { LocationSection } from "@/features/landing/components/location-section";
import { PracticalSection } from "@/features/landing/components/practical-section";
import { SpecialSessionSection } from "@/features/landing/components/special-session-section";
import { StatsSection } from "@/features/landing/components/stats-section";
import { WhyLearnSection } from "@/features/landing/components/why-learn-section";

export function LandingPage() {
  return (
    <>
      <PageSeo
        title="LearnWithJayed | HSC ICT Learning Platform"
        description="Join structured HSC ICT batches with experienced guidance, lecture sheets, exams, and a future-ready online LMS experience."
      />
      <HeroSection />
      <StatsSection />
      <WhyLearnSection />
      <PracticalSection />
      <LectureSheetSection />
      <ExamsSection />
      <LocationSection />
      <SpecialSessionSection />
      <AvailableBatchesSection />
      {/* <LearningProcessSection /> */}
      <FaqSection />
    </>
  );
}
