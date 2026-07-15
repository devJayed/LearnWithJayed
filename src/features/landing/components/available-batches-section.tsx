import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { batches } from "@/features/landing/data/landing-content";
import {
  CheckCircle2,
  Clock,
  Laptop,
  UsersRound,
} from "lucide-react";

export function AvailableBatchesSection() {
  return (
    <section id="batches" className="section-padding bg-background">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Admissions Open"
          title="Choose Your HSC-ICT Batch"
          description="Select the schedule that suits you best and begin your ICT journey with structured classes, practical sessions, and board-focused preparation."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {batches.map((batch) => (
            <Card
              key={batch.schedule}
              className="group flex flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <div className="h-2 bg-primary" />

              <div className="flex flex-1 flex-col p-6">
                <span className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {batch.mode}
                </span>

                <h3 className="text-2xl font-bold">
                  {batch.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                  <Clock className="size-4" />
                  <span className="font-medium">{batch.schedule}</span>
                </div>

                <div className="my-6 space-y-3">
                  {batch.items.map((item) => (
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
                      Limited seats in every batch
                    </div>

                    <div className="flex items-center gap-2">
                      <Laptop className="size-4 text-primary" />
                      Live offline & online classes
                    </div>
                  </div>
                </div>

                <Button asChild className="mt-auto w-full" size="lg">
                  <a href="#register">Apply for Admission</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}