import { useEffect, useState } from "react"
import { ApplicationsPage } from "./components/ApplicationsPage"
import { ApplicationGrid } from "./components/ApplicationGrid"
import { CampaignSteps } from "./components/CampaignSteps"
import { CapabilityGrid } from "./components/CapabilityGrid"
import { ContactSection } from "./components/ContactSection"
import { DetailPage } from "./components/DetailPage"
import { ExampleCampaigns } from "./components/ExampleCampaigns"
import { FitPipeline } from "./components/FitPipeline"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { EcosystemSupport } from "./components/EcosystemSupport"
import { MaterialSpaces } from "./components/MaterialSpaces"
import { MethodsPreview } from "./components/MethodsPreview"
import { ProblemCards } from "./components/ProblemCards"
import { WhatWeDo } from "./components/WhatWeDo"
import { capabilityGroups, methodGroups } from "./data/siteInventory"

function getRoute() {
  const route = window.location.hash.replace(/^#\/?/, "")
  return route || "home"
}

function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemCards />
      <WhatWeDo />
      <CampaignSteps />
      <CapabilityGrid />
      <MaterialSpaces />
      <ApplicationGrid />
      <MethodsPreview />
      <ExampleCampaigns />
      <EcosystemSupport />
      <FitPipeline />
      <ContactSection />
    </main>
  )
}

function ExamplesPage() {
  return (
    <main>
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
    window.scrollTo({ top: 0 })
  }, [route])

  let page = <HomePage />

  if (route === "capabilities") {
    page = (
      <DetailPage
        eyebrow="Capabilities"
        title="The full campaign capability model."
        description="xemX capabilities are grouped by the work they do in a campaign: creating the material library, measuring the right properties, interpreting the map, and supporting deeper follow-up."
        groups={capabilityGroups}
      />
    )
  }

  if (route === "methods") {
    page = (
      <DetailPage
        eyebrow="Methods"
        title="The tools behind the campaign."
        description="The methods page explains the technical routes used to create libraries, measure properties, and turn results into a usable material map."
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
      <Header />
      {page}
      <Footer />
    </div>
  )
}
