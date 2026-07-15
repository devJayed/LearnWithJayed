import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BackgroundProps = { className?: string };
export function DotPattern({ className }: BackgroundProps) { return <div aria-hidden className={cn("pointer-events-none absolute inset-0 opacity-[0.32] [background-image:radial-gradient(hsl(var(--primary)/.28)_1px,transparent_1px)] [background-size:18px_18px]", className)} />; }
export function BackgroundGrid({ className }: BackgroundProps) { return <div aria-hidden className={cn("pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:32px_32px]", className)} />; }
export function GradientBlob({ className }: BackgroundProps) { return <div aria-hidden className={cn("pointer-events-none absolute size-80 rounded-full bg-primary/10 blur-3xl", className)} />; }
export function SectionWrapper({ children, className, variant = "dots", ...props }: { children: ReactNode; className?: string; variant?: "dots" | "grid" | "plain" } & React.HTMLAttributes<HTMLElement>) {
  return <section className={cn("relative isolate overflow-hidden section-padding", className)} {...props}>{variant === "dots" && <DotPattern />}{variant === "grid" && <BackgroundGrid />}{variant !== "plain" && <GradientBlob className="-right-28 -top-32" />}<div className="relative">{children}</div></section>;
}
