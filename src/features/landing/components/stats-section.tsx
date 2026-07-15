import { stats } from "@/features/landing/data/landing-content";

export function StatsSection() {
  return (
    <section aria-label="Platform statistics" className="border-y bg-card">
      <div className="container grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-background p-5 text-center">
            <p className="text-3xl font-black text-primary">{stat.value}</p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
