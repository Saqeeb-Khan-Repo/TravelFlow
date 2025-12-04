import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { truncate } from "fs";

const plans = [
  {
    name: "Solo",
    price: "$29/month",
    description: "Perfect for individual travelers getting started",
    features: [
      "plan up to 3 active trips",
      "save favorite hotels and routes",
      "Basic trip analytics",
      "Email support",
      "5GB document storage(tickets,pdfs,visa)",
    ],
    highlighted: false,
  },
  {
    name: "Pro Explorer",
    price: "$79/month",
    description: "For frequent travelers who must want more control",
    features: [
      "plan up to 10 active trips",
      "Unlimited saved favorite hotels and routes",
      "advanced trip analytics",
      "Priority Chat support",
      "25GB document storage(tickets,pdfs,visa)",
    ],
    highlighted: true,
  },
  {
    name: "Team and Agencies",
    price: "Custom",
    description: "For travel teams and Agencies. ",
    features: [
      "unlimited team members",
      "shared trip workspaces",
      "Custom reporting and exports",
      "Dedicated Account manager",
      "Unlimited document storage(tickets,pdfs,visa)",
      "API Access and integration ",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Simple, flexible travel plans
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your style of travel All plans include a
            14-day free trail.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl border p-8 transition-colors",
                plan.highlighted
                  ? "border-accent bg-accent/5"
                  : "border-border bg-card"
              )}
            >
              {plan.highlighted && (
                <p className="text-xs font-medium text-accent uppercase tracking-wider mb-4">
                  Most Popular
                </p>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-muted-foreground">/month</span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-accent flex-shrink-1" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={cn(
                  "mt-8 w-full cursor-pointer",
                  plan.highlighted
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                )}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
