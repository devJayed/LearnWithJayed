import { ImageFrame } from "@/components/ui/image-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { imagePaths } from "@/constants/image-paths";
import { CheckCircle2 } from "lucide-react";

export function LectureSheetSection() {
  return (
    <section id="" className="section-padding">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <SectionHeading
            align="left"
            eyebrow="Lecture Sheets"
            title="Get exclusive lecture sheets for every chapter"
            description="Each chapter can have its own structured sheet, helping students revise faster and practice with a clear path."
          />
          <ul className="grid gap-3 text-sm text-muted-foreground">
            {[
              "Chapter-wise Concept Summaries",
              "Board-Focused Problem Practice",
              "Step-by-Step Solutions",
              "Key Notes & Exam Tips",
              "Revision & Self-Assessment",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <ImageFrame
          src={imagePaths.Chapters}
          alt="Stacked chapter-wise LearnWithJayed lecture sheets"
          className="min-h-[380px] aspect-[4/3]"
        />
      </div>
    </section>
  );
}
