import { SectionHeading } from "@/components/ui/section-heading";
import { useI18n } from "@/i18n/i18n-context";
import { SectionWrapper } from "@/components/ui/section-background";
import { m } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const { content: t } = useI18n();
  return (
    <SectionWrapper variant="dots" className="bg-card">
      <div className="container max-w-4xl space-y-10">
        <SectionHeading
  eyebrow={t.faq.eyebrow} title={t.faq.title} description={t.faq.description}
/>
        <Accordion.Root type="single" collapsible className="grid gap-3">
          {t.faq.items.map(([question, answer]) => (
            <Accordion.Item key={question} value={question} className="rounded-lg border bg-background">
              <Accordion.Header>
                <Accordion.Trigger className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg p-5 text-left font-semibold">
                  {question}
                  <ChevronDown className="size-5 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden px-5 pb-5 text-sm leading-6 text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{answer}</m.div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </SectionWrapper>
  );
}
