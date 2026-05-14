import { useEffect, useState } from "react"
import { ApplicationsPage } from "./components/ApplicationsPage"
import { ApplicationGrid } from "./components/ApplicationGrid"
import { CapabilityGrid } from "./components/CapabilityGrid"
import { ContactSection } from "./components/ContactSection"
import { DecisionBrief } from "./components/DecisionBrief"
import { DetailPage } from "./components/DetailPage"
import { ExampleCampaigns } from "./components/ExampleCampaigns"
import { FitPipeline } from "./components/FitPipeline"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { ProblemCards } from "./components/ProblemCards"
import { WhatWeDo } from "./components/WhatWeDo"
import { capabilityGroups, methodGroups } from "./data/siteInventory"

const pageRoutes = new Set(["home", "capabilities", "methods", "applications", "examples", "contact"])

function getRoute() {
  const route = window.location.hash.replace(/^#\/?/, "")
  return route || "home"
}

function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <DecisionBrief />
      <ProblemCards />
      <WhatWeDo />
      <CapabilityGrid />
      <ApplicationGrid />
      <ExampleCampaigns limit={2} />
      <FitPipeline />
      <ContactSection />
    </main>
  )
}

function ExamplesPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="mx-auto max-w-[1200px] px-6 pt-16 lg:px-10 lg:pt-20 xl:px-16">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Campaign examples</p>
        <h1 className="max-w-4xl text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">
          Example campaign shapes, written as material questions.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
          Each example follows the same practical arc: material question, campaign, output, and next step.
        </p>
      </section>
      <ExampleCampaigns />
      <ContactSection />
    </main>
  )
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  useEffect(() => {
    if (route === "contact") {
      window.requestAnimationFrame(() => document.getElementById("contact")?.scrollIntoView())
      return
    }
    if (!pageRoutes.has(route)) {
      window.requestAnimationFrame(() => document.getElementById(route)?.scrollIntoView())
      return
    }
    window.scrollTo({ top: 0 })
  }, [route])

  let page = <HomePage />

  if (route === "capabilities") {
    page = (
      <DetailPage
        eyebrow="Capabilities"
        title="What a xemX campaign can include."
        description="A campaign usually has four parts: make the library, measure the material, compare the results, and prepare the next validation step."
        groups={capabilityGroups}
      />
    )
  }

  if (route === "methods") {
    page = (
      <DetailPage
        eyebrow="Methods"
        title="Methods used to make and measure the libraries."
        description="xemX uses co-sputtered thin-film libraries, automated measurements, and data analysis to connect composition with properties."
        groups={methodGroups}
      />
    )
  }

  if (route === "applications") {
    page = <ApplicationsPage />
  }

  if (route === "examples") {
    page = <ExamplesPage />
  }

  if (route === "contact") {
    page = <HomePage />
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <a
        href="#main-content"
        onClick={(event) => {
          event.preventDefault()
          const main = document.getElementById("main-content")
          main?.focus({ preventScroll: true })
          main?.scrollIntoView()
        }}
        className="sr-only z-[60] rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      {page}
      <Footer />
    </div>
  )
}
