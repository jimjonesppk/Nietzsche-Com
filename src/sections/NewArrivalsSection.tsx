import React from "react"

export function NewArrivalsSection() {
  return (
    <section id="new" className="space-y-4 border-b border-border py-12">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            New arrivals
          </h2>
          <p className="text-sm text-muted-foreground">
            Fresh drops this week. Limited sizes first, always.
          </p>
        </div>
        <button className="hidden rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground sm:inline-flex">
          View all
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="relative h-40 bg-muted">
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="h-full w-full bg-gradient-to-br from-black/10 via-transparent to-black/30" />
              </div>
            </div>
            <div className="space-y-1 p-3">
              <p className="text-xs font-medium text-muted-foreground">
                Drop #{item}
              </p>
              <p className="text-sm font-medium">New arrival item</p>
              <p className="text-xs text-muted-foreground">₹999</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
