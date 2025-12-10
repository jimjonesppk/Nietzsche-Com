import React from "react"
<<<<<<< HEAD
import "./index.css" // or "./App.css" if you're using that
import { HomePage } from "./pages/HomePage"

const App: React.FC = () => {
  return <HomePage />
=======
import "./App.css" // keep this for now, but you can clean it up later
import { Navbar } from "./sections/Navbar"
import FC3TrackingLoader from "./components/FC3TrackingLoader"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* <FC3TrackingLoader label="TRACKING" width={300} height={18} speed={2} /> */}

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        {/* HERO / COLLECTIONS */}
        <section
          id="collections"
          className="grid gap-8 border-b border-border pb-12 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              curated drops
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Nieche Ekom – niche pieces for everyday wear.
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground">
              Build a wardrobe that actually feels like you. Small-batch
              collections, clean fits, and fabrics that survive real life.
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
          </div>

          {/* Simple hero card */}
          <div className="flex items-center justify-center">
            <div className="relative h-52 w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-muted">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))/0.18,_transparent_60%)]" />
              <div className="relative flex h-full flex-col items-start justify-between p-5">
                <div className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                  Today&apos;s pick
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    nieche ekom edit
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

        {/* NEW ARRIVALS */}
        <section id="new" className="space-y-4 border-b border-border py-12">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                New arrivals
              </h2>
              <p className="text-sm text-muted-foreground">
                Fresh pieces just dropped. Limited stocks first, always.
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

        {/* SALE */}
        <section id="sale" className="space-y-6 border-b border-border py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-red-500">
                sale
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                Sale picks – same quality, nicer price.
              </h2>
              <p className="max-w-xl text-sm text-muted-foreground">
                End-of-run pieces, overstock, and community favourites. Limited
                quantities, no compromise on quality.
              </p>
            </div>

            <div className="rounded-full border border-dashed border-red-500/40 px-4 py-2 text-xs text-red-500">
              Extra 10% off over ₹2,499
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Minimalist Hoodie",
                old: "₹2,499",
                price: "₹1,599",
                discount: "-36%",
                tag: "Best seller",
              },
              {
                name: "Oversized Tee",
                old: "₹1,299",
                price: "₹899",
                discount: "-31%",
                tag: "New on sale",
              },
              {
                name: "Comfort Joggers",
                old: "₹2,199",
                price: "₹1,499",
                discount: "-32%",
                tag: "Limited stock",
              },
              {
                name: "Everyday T-Shirt Pack (3)",
                old: "₹1,999",
                price: "₹1,299",
                discount: "-35%",
                tag: "Bundle",
              },
            ].map((p) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative h-40 bg-muted">
                  <div className="absolute left-2 top-2 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground shadow-sm">
                    {p.tag}
                  </div>
                  <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
                    {p.discount}
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-3">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium">{p.name}</h3>
                    <div className="flex items-baseline gap-2 text-sm">
                      <span className="font-semibold">{p.price}</span>
                      <span className="text-xs text-muted-foreground line-through">
                        {p.old}
                      </span>
                    </div>
                  </div>
                  <button className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="space-y-8 py-12">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.9fr] md:items-start">
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                about nieche ekom
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                Small brand, big wardrobe energy.
              </h2>
              <p className="text-sm text-muted-foreground">
                Nieche Ekom is for people who are done with random impulse
                buys. We keep the catalog tight, focus on fits that work, and
                fabrics that feel good all day.
              </p>
              <p className="text-sm text-muted-foreground">
                Think of it as your curated section of the internet where
                everything actually goes together.
              </p>

              <div className="grid gap-4 pt-2 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-3">
                  <p className="text-xl font-semibold">4.8</p>
                  <p className="text-xs text-muted-foreground">
                    Avg. customer rating
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-3">
                  <p className="text-xl font-semibold">10k+</p>
                  <p className="text-xs text-muted-foreground">
                    Orders shipped
                  </p>
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
                Why people stick with us
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 text-xs">•</span>
                  <span>
                    <span className="font-medium text-foreground">
                      Fewer, better pieces:
                    </span>{" "}
                    no endless scrolling, just solid picks.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-xs">•</span>
                  <span>
                    <span className="font-medium text-foreground">
                      Fair pricing:
                    </span>{" "}
                    online-first model, no extra fluff.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-xs">•</span>
                  <span>
                    <span className="font-medium text-foreground">
                      Real feedback loop:
                    </span>{" "}
                    drops and restocks are shaped by customer reviews.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Nieche Ekom. All rights reserved.
      </footer>
    </div>
  )
>>>>>>> 97496549f6ed4c7b5b7ca9e1b54e0a72ee0db1f5
}

export default App
