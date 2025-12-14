import React from "react"

export function HeroSection() {
  return (
    <section
      id="collections"
      className="grid gap-8 border-b border-border pb-12 md:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          curated drops
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Everyday streetwear for niche vibes.
        </h1>
        <p className="max-w-xl text-sm text-muted-foreground">
          Build your signature look with tightly curated collections, limited
          runs, and quality basics that actually last.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#sale"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Shop sale
          </a>
          <a
            href="#new"
            className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            View new arrivals
          </a>
        </div>

        <div className="flex gap-6 pt-4 text-xs text-muted-foreground">
          <div>
            <p className="font-medium text-foreground">Free shipping</p>
            <p>On orders over ₹1,999</p>
          </div>
          <div>
            <p className="font-medium text-foreground">Easy returns</p>
            <p>15-day hassle-free</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative h-52 w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-muted">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))/0.18,_transparent_60%)]" />
          <div className="relative flex h-full flex-col items-start justify-between p-5">
            <div className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              Today&apos;s pick
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                nichestore edit
              </p>
              <h2 className="mt-1 text-xl font-semibold">
                Capsule Wardrobe Kit
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                6 pieces. Infinite combos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
