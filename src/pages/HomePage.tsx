import React from "react"
import { Navbar } from "../sections/Navbar"
import { HeroSection } from "../sections/HeroSection"
import { NewArrivalsSection } from "../sections/NewArrivalsSection"
import { SaleSection } from "../sections/SaleSection"
import { AboutSection } from "../sections/AboutSection"

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <HeroSection />
        <NewArrivalsSection />
        <SaleSection />
        <AboutSection />
      </main>
    </div>
  )
}
