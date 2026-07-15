import { ArrowRight, BookOpenCheck, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ImageFrame } from "@/components/ui/image-frame";
import { imagePaths } from "@/constants/image-paths";

const FEATURES = [
  "Exclusive Lecture Sheets",
  "Interactive Online Exams",
  "Expert Practical Test Preparation",
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-background"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto grid min-h-[calc(100vh-4rem)] items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium text-primary shadow-sm">
            <BookOpenCheck className="h-4 w-4" />
            <span>HSC ICT Learning, Structured for Securing A+</span>
          </div>

          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Learn ICT with Clarity, Discipline, and Exam Confidence.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            <strong className="text-foreground">LearnWithJayed.com</strong>{" "}
            offers offline HSC ICT batches in{" "}
            <span className="font-semibold text-primary">
              Jhiltuli, Faridpur
            </span>{" "}
            for students who want structured guidance, concept-based learning,
            and complete exam preparation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#batches" aria-label="View available HSC ICT batches">
                View Batches
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button asChild variant="outline" size="lg">
              <a href="#about" aria-label="Learn why students choose Jayed">
                Why Learn With Jayed
              </a>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <ImageFrame
            src={imagePaths.Teacher}
            alt="Jayed Hossain teaching HSC ICT"
            className="w-full max-w-lg overflow-hidden rounded-2xl"
            imageClassName="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}