import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { MapPin } from "lucide-react";

export function LocationSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        {/* Left Side */}
        <div className="space-y-6">
          <SectionHeading
            align="left"
            eyebrow="Offline Location"
            title="Join classes at Jhiltuli, Faridpur"
            description="The location section is prepared for your map integration while keeping the landing page lightweight and asset-free for now."
          />
          <div className="rounded-lg border bg-background p-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 size-5 text-primary" />
              <div>
                <h3 className="font-bold"> Opposite of Rainbow School, Parthib Niloy Tower (1st Floor), Jhiltuli, Faridpur</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Offline HSC ICT batches are offered for students near this location.
                </p>
              </div>
            </div>
          </div>
          <Button asChild variant="outline">
            <a href="#contact">Contact for Direction</a>
          </Button>
        </div>
        {/* Right Side */}
       <div className="overflow-hidden rounded-xl border shadow-sm aspect-[4/3]">
  <iframe
    title="LearnWithJayed - Jhiltuli, Faridpur Location"
    src="https://www.google.com/maps/embed?pb=!4v1783945658724!6m8!1m7!1sBC0jv3vaZHGetoawdiarxQ!2m2!1d23.59967083424228!2d89.83688914671505!3f333.03395262261074!4f-5.51947086071776!5f0.7820865974627469"
    className="h-full w-full"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>
      </div>
    </section>
  );
}
