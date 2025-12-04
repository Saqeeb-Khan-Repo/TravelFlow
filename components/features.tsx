import { Workflow, Shield, Gauge, Users } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Smart Trip Planner",
    description:
      "Create day-by-day itineraries in minutes. Add flights, stays, and activities and let TravelFlow keep everything perfectly organized.",
  },
  {
    icon: Shield,
    title: "Flexible Bookings",
    description:
      "Compare prices across airlines and hotels, then book with flexible options that match your budget and schedule..",
  },
  {
    icon: Gauge,
    title: "Real-time Travel Update",
    description:
      "Get live flight alerts, gate changes, and weather updates so your plans stay on track wherever you are.",
  },
  {
    icon: Users,
    title: "Group Travel Coordination",
    description:
      "Invite friends and family, share plans in real time, collect payments, and keep everyone on the same page.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">
            Features
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Local Experiences
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover guided tours, cultural activities, food spots, and hidden
            gems curated by locals. Make every trip more meaningful with
            experiences you won’t find in typical travel guides.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
