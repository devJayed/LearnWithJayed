import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyLearnItems } from "@/features/landing/data/landing-content";

export function WhyLearnSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Why Learn With Jayed"
          title="Learn ICT with ICT Background Expert"
          description="Discover the unique advantages of learning ICT with an expert who has a strong academic background and extensive teaching experience." 
        />
        <div className="grid gap-5 md:grid-cols-3">
          {whyLearnItems.map(({ title, description, icon: Icon }) => (
            <Card key={title}>
              <CardHeader>
                <div className="grid size-12 place-items-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
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
