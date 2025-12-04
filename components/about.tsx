export function About() {
  return (
    <section
      aria-labelledby="about-title"
      id="about"
      className="border-y border-border bg-card py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1
            id="about-title"
            className="text-balance text-3xl font-bold text-foreground sm:text-4xl"
          >
            About TravelFlow
          </h1>

          <h2 className="mt-6 text-balance text-2xl font-semibold text-foreground sm:text-3xl">
            Our Mission
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            At TravelFlow, travel should be inspiring—not overwhelming. Our
            mission is simple:
          </p>

          <p className="mt-4 text-lg font-semibold text-muted-foreground">
            To give every traveler the tools to plan confidently, explore
            effortlessly, and enjoy the journey as much as the destination.
          </p>

          <div className="my-10 h-px w-full bg-border" />

          <h2 className="text-balance text-2xl font-semibold text-foreground sm:text-3xl">
            Why We Built TravelFlow
          </h2>

          <p className="mt-4 text-sm text-muted-foreground">
            Planning a trip today often means juggling dozens of tabs—flights,
            hotels, maps, notes, budget apps, and group chats. Important details
            get lost, plans get messy, and excitement turns into stress.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            TravelFlow exists to fix that.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            TravelFlow brings everything together into{" "}
            <strong>one clean, intelligent</strong> platform where planning is
            frictionless and fun. Whether you&apos;re preparing a weekend
            getaway, a digital-nomad lifestyle, or a family vacation, TravelFlow
            adapts to the way you travel.
          </p>
        </div>
      </div>
    </section>
  );
}
