import { ApplicationGrid } from "./components/ApplicationGrid"
import { CampaignSteps } from "./components/CampaignSteps"
import { CapabilityGrid } from "./components/CapabilityGrid"
import { ContactSection } from "./components/ContactSection"
import { ExampleCampaigns } from "./components/ExampleCampaigns"
import { FitPipeline } from "./components/FitPipeline"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { ProblemCards } from "./components/ProblemCards"
import { WhatWeDo } from "./components/WhatWeDo"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      <main>
        <Hero />
        <ProblemCards />
        <WhatWeDo />
        <CampaignSteps />
        <CapabilityGrid />
        <ApplicationGrid />
        <ExampleCampaigns />
        <FitPipeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
