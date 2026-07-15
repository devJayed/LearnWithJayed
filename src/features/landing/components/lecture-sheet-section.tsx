import { ImageFrame } from "@/components/ui/image-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { imagePaths } from "@/constants/image-paths";
import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/i18n/i18n-context";
import { SectionWrapper } from "@/components/ui/section-background";
import { Reveal } from "@/components/ui/motion";

export function LectureSheetSection() {
  const { content: t } = useI18n();
  return (
    <SectionWrapper variant="grid">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div className="order-1 lg:order-2 space-y-6">
          <SectionHeading
            align="left"
            eyebrow={t.sheets.eyebrow} title={t.sheets.title} description={t.sheets.description}
          />
          <ul className="grid gap-3 text-sm text-muted-foreground">
            {t.sheets.items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <Reveal><ImageFrame
          src={imagePaths.Chapters}
          alt="Stacked chapter-wise LearnWithJayed lecture sheets"
          className="order-2 lg:order-1 min-h-[320px] aspect-[4/3]"
        /></Reveal>
      </div>
    </SectionWrapper>
  );
}
