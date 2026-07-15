import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-background";
import { SectionHeading } from "@/components/ui/section-heading";
import { useI18n } from "@/i18n/i18n-context";
import { MapPin } from "lucide-react";

export function LocationSection() {
  const { content: t } = useI18n();
  return (
    <SectionWrapper variant="grid" className="bg-background">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        {/* Left Side */}
        <div className="space-y-6">
          <SectionHeading
            align="left"
            eyebrow={t.location.eyebrow} title={t.location.title} description={t.location.description}
          />
          <div className="rounded-lg border bg-background p-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 size-5 text-primary" />
              <div>
                <h3 className="font-bold">{t.location.address}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {t.location.detail}
                </p>
              </div>
            </div>
          </div>
          <Button asChild variant="outline">
            <a href="#contact">{t.location.cta}</a>
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
    </SectionWrapper>
  );
}
