// src/sections/SaleSection.tsx
import React from "react"

const saleProducts = [
  {
    id: 1,
    name: "Minimalist Hoodie",
    tag: "Best seller",
    oldPrice: "₹2,499",
    price: "₹1,599",
    discount: "-36%",
  },
  {
    id: 2,
    name: "Everyday T-Shirt Pack (3)",
    tag: "Bundle",
    oldPrice: "₹1,999",
    price: "₹1,299",
    discount: "-35%",
  },
  {
    id: 3,
    name: "Comfort Joggers",
    tag: "Limited stock",
    oldPrice: "₹2,199",
    price: "₹1,499",
    discount: "-32%",
  },
  {
    id: 4,
    name: "Oversized Tee",
    tag: "New on sale",
    oldPrice: "₹1,299",
    price: "₹899",
    discount: "-31%",
  },
]

export function SaleSection() {
  return (
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
            End-of-run pieces, overstock, and community favourites.
            Limited quantities, no compromise on quality.
          </p>
        </div>

        <div className="rounded-full border border-dashed border-red-500/40 px-4 py-2 text-xs text-red-500">
          Extra 10% off at checkout on orders over ₹2,499
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {saleProducts.map((product) => (
          <article
            key={product.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="relative h-40 bg-muted">
              <div className="absolute left-2 top-2 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground shadow-sm">
                {product.tag}
              </div>
              <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
                {product.discount}
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-3">
              <div className="space-y-1">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <div className="flex items-baseline gap-2 text-sm">
                  <span className="font-semibold">{product.price}</span>
                  <span className="text-xs text-muted-foreground line-through">
                    {product.oldPrice}
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

      <p className="text-[11px] text-muted-foreground">
        *Sale pieces are final for hygiene reasons. Size exchanges possible
        if stock is available.
      </p>
    </section>
  )
}
