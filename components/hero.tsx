import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 " id="home">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center h-100">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Plan Smarter with <span className="text-accent">TravelFlow</span>{" "}
              Travel Further
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              The all-in-one platform to plan trips, book stays, and manage
              every detail of your journey in one place.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                <a href="#pricing">Book now</a>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary bg-transparent"
              >
                <a href="#testimonials"> Plan Now</a>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-3xl" />
            <div className="relative rounded-2xl border border-border bg-card p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-secondary" />
                  <div className="h-4 w-1/2 rounded bg-secondary" />
                  <div className="h-4 w-5/6 rounded bg-accent/30" />
                  <div className="h-4 w-2/3 rounded bg-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
