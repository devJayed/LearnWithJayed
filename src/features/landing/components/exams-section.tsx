import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-background";
import { SectionHeading } from "@/components/ui/section-heading";
import { useI18n } from "@/i18n/i18n-context";
import { m } from "framer-motion";
import { ClipboardCheck } from "lucide-react";

export function ExamsSection() {
  const { content: t } = useI18n();
  return (
    <SectionWrapper variant="dots" className="bg-card">
      <div className="container space-y-8">
        <SectionHeading
          eyebrow={t.exams.eyebrow} title={t.exams.title} description={t.exams.description}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.exams.items.map((exam, index) => (
            <m.div key={exam} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .07 }} whileHover={{ y: -5 }}><Card className="p-5">
              <ClipboardCheck className="mb-5 size-8 text-primary" />
              <h3 className="text-base font-bold">{exam}</h3>
            </Card></m.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
