import { ArrowRight, BookOpenCheck, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ImageFrame } from "@/components/ui/image-frame";
import { GradientBlob, SectionWrapper } from "@/components/ui/section-background";
import { imagePaths } from "@/constants/image-paths";
import { useI18n } from "@/i18n/i18n-context";
import { m } from "framer-motion";

export function HeroSection() {
  const { content: t } = useI18n();
  return (
    <SectionWrapper
      id="home"
      variant="dots"
      className="relative isolate overflow-hidden bg-background py-10 md:py-14"
      aria-labelledby="hero-heading"
    >
      <GradientBlob className="-left-32 top-12 animate-pulse" />
      <div className="container relative mx-auto grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
        {/* Content */}
        <m.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="mx-auto max-w-2xl lg:mx-0">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium text-primary shadow-sm">
            <BookOpenCheck className="h-4 w-4" />
            <span>{t.hero.badge}</span>
          </div>

          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t.hero.title}
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
            {t.hero.description.split("<location>")[0]}<span className="font-semibold text-primary">{t.hero.description.split("<location>")[1]?.split("</location>")[0]}</span>{t.hero.description.split("</location>")[1]}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="px-5 py-3">
              <a href="#batches" aria-label="View available HSC ICT batches">
                {t.hero.batches}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button asChild variant="outline" className="px-5 py-3">
              <a href="#about" aria-label="Learn why students choose Jayed">
                {t.hero.why}
              </a>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.hero.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </m.div>

        {/* Image */}
        <m.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="flex justify-center lg:justify-end">
          <ImageFrame
            src={imagePaths.Teacher}
            alt="Jayed Hossain teaching HSC ICT"
            className="w-full max-w-lg overflow-hidden rounded-2xl"
            imageClassName="h-auto w-full object-contain"
          />
        </m.div>
      </div>
    </SectionWrapper>
  );
}
