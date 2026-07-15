import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { specialSessions } from "@/features/landing/data/landing-content";

export function SpecialSessionSection() {
  return (
    <section className="section-padding">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Special Session"
          title="Extra support for students who need a focused plan"
          description="Special sessions keep the learning path humane, realistic, and recoverable."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {specialSessions.map(({ title, description, icon: Icon }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="size-9 text-primary" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
