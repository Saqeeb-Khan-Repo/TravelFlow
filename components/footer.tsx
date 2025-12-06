import { Zap } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "API Reference",
    "Guides",
    "Community",
    "Status",
  ],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com" },
  { name: "GitHub", href: "https://github.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Discord", href: "https://discord.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        {/* Top: brand + columns */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-accent" />
              <span className="text-xl font-semibold tracking-tight text-foreground">
                TravelFlow
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Plan, book, and organize every trip in one place so you can travel
              with clarity and confidence.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <nav key={category} aria-label={category}>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
            <p className="text-center md:text-left">
              © {year} TravelFlow. All rights reserved.
            </p>
            <p className="text-center md:text-right">
              Built for modern travelers worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
