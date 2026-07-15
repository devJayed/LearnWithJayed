import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-background";
import { SectionHeading } from "@/components/ui/section-heading";
import { useI18n } from "@/i18n/i18n-context";
import { m } from "framer-motion";
import { BookOpenCheck, GraduationCap, Users } from "lucide-react";

export function WhyLearnSection() {
  const { content: t } = useI18n();
  const icons = [Users, GraduationCap, BookOpenCheck];
  return (
    <SectionWrapper id="about" variant="grid" className="bg-background">
      <div className="container space-y-8">
        <SectionHeading
          eyebrow={t.why.eyebrow} title={t.why.title} description={t.why.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {t.why.items.map(([title, description], index) => { const Icon = icons[index]; return <m.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} whileHover={{ y: -6 }}><Card>
              <CardHeader>
                <div className="grid size-12 place-items-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </CardContent>
            </Card></m.div>; })}
        </div>
      </div>
    </SectionWrapper>
  );
}
