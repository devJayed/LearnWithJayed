import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { useI18n } from "@/i18n/i18n-context";
import { SectionWrapper } from "@/components/ui/section-background";
import { m } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Laptop,
  UsersRound,
} from "lucide-react";

export function AvailableBatchesSection() {
  const { content: t } = useI18n();
  return (
    <SectionWrapper id="batches" variant="grid" className="bg-background">
      <div className="container space-y-8">
        <SectionHeading
          eyebrow={t.batches.eyebrow} title={t.batches.title} description={t.batches.description}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {t.batches.schedules.map((batch, index) => { const [schedule, items] = batch as [string, string[]]; return (
            <m.div key={schedule} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} whileHover={{ y: -5 }}><Card
              className="group flex flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <div className="h-2 bg-primary" />

              <div className="flex flex-1 flex-col p-6">
                <span className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {t.batches.mode}
                </span>

                <h3 className="text-2xl font-bold">
                  {t.batches.batchTitle}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                  <Clock className="size-4" />
                  <span className="font-medium">{schedule}</span>
                </div>

                <div className="my-6 space-y-3">
                  {items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-sm leading-6">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6 rounded-lg border bg-muted/40 p-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <UsersRound className="size-4 text-primary" />
                      {t.batches.limited}
                    </div>

                    <div className="flex items-center gap-2">
                      <Laptop className="size-4 text-primary" />
                      {t.batches.live}
                    </div>
                  </div>
                </div>

                <Button asChild className="mt-auto w-full py-3">
                  <a href="#register">{t.batches.apply}</a>
                </Button>
              </div>
            </Card></m.div>);
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
