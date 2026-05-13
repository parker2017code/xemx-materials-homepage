import { Beaker, Map, ScanLine } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"

const items = [
  {
    number: "01",
    title: "Build the library",
    body: "Create a real sample set where composition or process conditions change across the wafer or carrier.",
    icon: Beaker,
  },
  {
    number: "02",
    title: "Measure the points",
    body: "Characterize many positions so each region has measured property data tied to composition.",
    icon: ScanLine,
  },
  {
    number: "03",
    title: "Choose what to test next",
    body: "Use the map to pick candidate regions, reject poor regions, and design the next smaller campaign.",
    icon: Map,
  },
]

export function WhatWeDo() {
  return (
    <section id="how-it-works" className="border-y border-slate-200 bg-white/70">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1fr] lg:px-10 lg:py-28 xl:px-16">
        <div>
          <SectionHeader
            eyebrow="What xemX does"
            title="xemX turns a large material search space into a measured map."
            description="Instead of making one sample at a time, xemX creates a material library where composition changes across a single wafer or sample set. Each point is measured directly. The result is a map showing which material regions look promising, which fail, and what should be tested next."
          />
        </div>

        <div className="grid gap-4">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[auto_1fr]"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="flex items-start gap-3">
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">{item.number}</span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
