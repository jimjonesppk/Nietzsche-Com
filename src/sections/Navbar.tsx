import { useState } from "react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-semibold">
            NS
          </div>
          <span className="text-lg font-semibold tracking-tight">
            nichestore
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#collections"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Collections
          </a>
          <a
            href="#new"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            New arrivals
          </a>
          <a
            href="#sale"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sale
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>
        </div>

        {/* Right side: CTA / icons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-full border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground md:inline-flex"
          >
            Sign in
          </button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            aria-label="Cart"
          >
            🛒
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded bg-foreground" />
              <span className="block h-0.5 w-5 rounded bg-foreground" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 py-3">
            <a
              href="#collections"
              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Collections
            </a>
            <a
              href="#new"
              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              New arrivals
            </a>
            <a
              href="#sale"
              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Sale
            </a>
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              About
            </a>
            <button
              type="button"
              className="mt-1 block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Sign in
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
