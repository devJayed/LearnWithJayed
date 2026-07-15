import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { exams } from "@/features/landing/data/landing-content";
import { ClipboardCheck } from "lucide-react";

export function ExamsSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Exam System"
          title="Be confident with Exams"
          description="A practical exam rhythm keeps students consistent from daily learning to final Board style preparation."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {exams.map((exam) => (
            <Card key={exam} className="p-5">
              <ClipboardCheck className="mb-5 size-8 text-primary" />
              <h3 className="text-base font-bold">{exam}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
