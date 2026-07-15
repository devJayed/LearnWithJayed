import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-background";
import { SectionHeading } from "@/components/ui/section-heading";
import { useI18n } from "@/i18n/i18n-context";
import { m } from "framer-motion";
import { CalendarDays, Target } from "lucide-react";

export function SpecialSessionSection() {
  const { content: t } = useI18n(); const icons = [Target, CalendarDays];
  return (
    <SectionWrapper variant="dots" className="bg-card">
      <div className="container space-y-8">
        <SectionHeading
          eyebrow={t.special.eyebrow} title={t.special.title} description={t.special.description}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {t.special.items.map(([title, description], index) => { const Icon = icons[index]; return <m.div key={title} whileHover={{ y: -5 }}><Card>
              <CardHeader>
                <Icon className="size-9 text-primary" />
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
