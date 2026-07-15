import { ImageFrame } from "@/components/ui/image-frame";
import { Reveal } from "@/components/ui/motion";
import { SectionWrapper } from "@/components/ui/section-background";
import { SectionHeading } from "@/components/ui/section-heading";
import { imagePaths } from "@/constants/image-paths";
import { useI18n } from "@/i18n/i18n-context";
import { CheckCircle2 } from "lucide-react";

export function PracticalSection() {
  const { content: t } = useI18n();
  return (
    <SectionWrapper variant="dots" className="bg-card">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            align="left"
            eyebrow={t.practical.eyebrow} title={t.practical.title} description={t.practical.description}
          />

          <ul className="grid gap-4 text-sm text-muted-foreground">
            {t.practical.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Reveal><ImageFrame
          src={imagePaths.Practical}
          alt="Students participating in hands-on ICT practical sessions"
          className="aspect-[4/3] min-h-[320px]"
        /></Reveal>
      </div>
    </SectionWrapper>
  );
}
