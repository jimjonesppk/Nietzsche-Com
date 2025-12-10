import React from "react"

export function AboutSection() {
  return (
    <section id="about" className="space-y-8 py-12">
      <div className="grid gap-10 md:grid-cols-[1.4fr_0.9fr] md:items-start">
        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            about nichestore
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Built for people who actually wear their clothes.
          </h2>
          <p className="text-sm text-muted-foreground">
            nichestore started with a simple idea: most wardrobes are 80% “meh”
            and 20% “I love this”. We&apos;re obsessed with making more of the
            second category – pieces that feel good, fit right, and survive the
            weekly wash cycle without turning into a completely different shade.
          </p>
          <p className="text-sm text-muted-foreground">
            We work with small-batch manufacturers, keep our catalog focused
            instead of bloated, and quietly ship out things you&apos;ll probably
            overwear.
          </p>

          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-3">
              <p className="text-xl font-semibold">4.8</p>
              <p className="text-xs text-muted-foreground">
                Avg. customer rating
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-3">
              <p className="text-xl font-semibold">30k+</p>
              <p className="text-xs text-muted-foreground">Orders shipped</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-3">
              <p className="text-xl font-semibold">7</p>
              <p className="text-xs text-muted-foreground">
                Cities with 2-day delivery
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold tracking-tight">
            What makes us different?
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="mt-1 text-xs">•</span>
              <span>
                <span className="font-medium text-foreground">
                  Tight catalog:
                </span>{" "}
                fewer products, more thought put into each fit and fabric.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-xs">•</span>
              <span>
                <span className="font-medium text-foreground">
                  Fair pricing:
                </span>{" "}
                we keep things online-first and transparent to cut fluff costs.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-xs">•</span>
              <span>
                <span className="font-medium text-foreground">
                  Community-driven:
                </span>{" "}
                we tweak fits and colours based on actual customer feedback.
              </span>
            </li>
          </ul>

          <div className="mt-4 rounded-xl bg-muted p-4 text-xs text-muted-foreground">
            <p className="font-medium text-foreground">
              P.S. We&apos;re tiny, not a giant brand.
            </p>
            <p className="mt-1">
              If you reply to our emails or DMs, you&apos;re probably talking to
              the same 2–3 people who obsess over product mockups. No bots, just
              too much coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
