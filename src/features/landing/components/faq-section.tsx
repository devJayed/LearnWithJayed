import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/features/landing/data/landing-content";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container max-w-4xl space-y-10">
        <SectionHeading
  eyebrow="Frequently Asked Questions"
  title="Everything You Need to Know Before Admission"
  description="Find answers to the most common questions about our courses, admission process, class format, and learning experience."
/>
        <Accordion.Root type="single" collapsible className="grid gap-3">
          {faqs.map((faq) => (
            <Accordion.Item key={faq.question} value={faq.question} className="rounded-lg border bg-background">
              <Accordion.Header>
                <Accordion.Trigger className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg p-5 text-left font-semibold">
                  {faq.question}
                  <ChevronDown className="size-5 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden px-5 pb-5 text-sm leading-6 text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
