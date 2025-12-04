import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "TravelFlow made planning my Europe trip effortless. Everything from flights to local tours stayed in one clean timeline",
    author: "Sarah Chen",
    role: "solo Traveler",
    avatar: "/professional-woman-headshot.png",
  },
  {
    quote:
      "As a remote worker. I move every few months.TravelFlow handles vises, stays and flights so i can focus on my work",
    author: "Marcus Rodriguez",
    role: "Digital Nomad",
    avatar: "/professional-man-headshot.png",
  },
  {
    quote:
      "Planning a vacation for five people used to be streessful. with shared itineraries and reminders,our family trip finally felt relaxing",
    author: "Emily Watson",
    role: "Family Traveler",
    avatar: "images/testimonial-3.png",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-card border-y border-border
      has-focus-visible:zoom-out-100"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Trusted by travelers worldwide
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 transition-colors hover:border-accent/50">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <blockquote className="text-muted-foreground leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                  />
                  <AvatarFallback className="bg-secondary text-foreground">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
