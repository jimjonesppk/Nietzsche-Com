import React, { useState } from "react"
import LinearLoader from "../components/LinearLoader"

export function AboutSection() {
  const [showLoader, setShowLoader] = useState(false)

  return (
    <section id="about" className="space-y-8 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.9fr] md:items-start">
          {/* LEFT: About text */}
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              about nichestore
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">
              Built for people who actually wear their clothes.
            </h2>

            <div className="prose max-w-none text-sm text-muted-foreground">
              <p>
                nichestore started with a simple idea: most wardrobes are 80%
                “meh” and 20% “I love this”. We obsess over making more of the
                second category — pieces that feel good, fit right, and survive
                the weekly wash without turning into a completely different
                shade.
              </p>

              <p>
                We partner with small-batch manufacturers, keep our catalog
                focused (not bloated), and ship thoughtfully. The result is
                reliable basics, seasonal edits, and a lot fewer returns.
              </p>

              <div className="grid gap-4 pt-2 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-3">
                  <p className="text-xl font-semibold">4.8</p>
                  <p className="text-xs text-muted-foreground">Avg. customer rating</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-3">
                  <p className="text-xl font-semibold">30k+</p>
                  <p className="text-xs text-muted-foreground">Orders shipped</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-3">
                  <p className="text-xl font-semibold">7</p>
                  <p className="text-xs text-muted-foreground">Cities with 2-day delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Info card and loader demo */}
          <aside className="space-y-4 rounded-2xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold tracking-tight">What makes us different?</h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1 text-xs">•</span>
                <span>
                  <span className="font-medium text-foreground">Tight catalog:</span> fewer products, more thought put into each fit and fabric.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-xs">•</span>
                <span>
                  <span className="font-medium text-foreground">Fair pricing:</span> online-first model, no fluff costs.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 text-xs">•</span>
                <span>
                  <span className="font-medium text-foreground">Community-driven:</span> designs shaped by real feedback.
                </span>
              </li>
            </ul>

            {/* Loader demo card (compact) */}
            <div className="mt-4 rounded-xl bg-muted p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Loader demo</p>
                  <p className="text-xs text-muted-foreground">Toggle the loader to preview the transition strip.</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowLoader((s) => !s)}
                    aria-pressed={showLoader}
                    className={
                      "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-xs font-medium " +
                      (showLoader
                        ? "bg-muted text-muted-foreground border border-border cursor-pointer"
                        : "bg-primary text-primary-foreground hover:bg-primary/90")
                    }
                  >
                    {showLoader ? "Hide loader" : "Show loader"}
                  </button>
                </div>
              </div>

              {/* Keep the loader horizontally centered and compact */}
              <div className="mt-4 flex justify-center">
                {showLoader ? (
                  <div className="inline-block w-full max-w-[280px]">
                    <LinearLoader label="TRACKING" maxWidth={280} height={14} speed={1.6} segWidthPct={0.10} />
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground">Loader hidden</p>
                )}
              </div>

              <p className="mt-3 text-[11px] text-muted-foreground">
                *This demo is purely visual — the actual site transition can use this as an overlay for route changes.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
