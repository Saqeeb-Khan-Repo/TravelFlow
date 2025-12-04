const stats = [
  { value: "Trusted By", label: "1M+", company: "Customers" },
  { value: "Global Rank 33", label: "Trip Planner", company: "Platform" },
  { value: "100%", label: "Refund for", company: "Technical Fault" },
  { value: "10×", label: "Best Experiance for", company: "Travelers" },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((stat, index) => (
            <div key={index} className="px-4 py-8 lg:px-8 lg:py-12">
              <p className="text-2xl font-bold text-foreground lg:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              <p className="mt-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
