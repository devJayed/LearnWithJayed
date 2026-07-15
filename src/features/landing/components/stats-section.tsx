import { SectionWrapper } from "@/components/ui/section-background";
import { useI18n } from "@/i18n/i18n-context";
import { m } from "framer-motion";

export function StatsSection() {
  const { content: t } = useI18n();
  return (
    <SectionWrapper variant="dots" className="bg-card py-8 md:py-10">
      <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.stats.map((stat, index) => (
          <m.div key={stat.label} initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="rounded-lg bg-background p-5 text-center shadow-sm">
            <p className="text-3xl font-black text-primary">{stat.value}</p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
          </m.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
