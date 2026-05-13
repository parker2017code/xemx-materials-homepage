import { Beaker, Map, ScanLine, Waypoints } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"

const items = [
  {
    number: "01",
    title: "Create material libraries",
    body: "Build physical combinatorial thin-film libraries with many related material variations in one campaign.",
    icon: Beaker,
  },
  {
    number: "02",
    title: "Measure what formed",
    body: "Map composition, phase, structure, and surface behavior so each result is tied to a real material region.",
    icon: ScanLine,
  },
  {
    number: "03",
    title: "Measure what matters",
    body: "Add electrical, mechanical, optical, magnetic, or localized electrochemical screening depending on the material question.",
    icon: Waypoints,
  },
  {
    number: "04",
    title: "Select what to test next",
    body: "Rank regions, compare tradeoffs, and choose candidates for customer validation or follow-up samples.",
    icon: Map,
  },
]

export function WhatWeDo() {
  return (
    <section id="how-it-works" className="border-y border-slate-200 bg-white/70">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-16 lg:grid-cols-[0.9fr_1fr] lg:px-10 lg:py-20 xl:px-16">
        <div>
          <SectionHeader
            eyebrow="What xemX does"
            title="xemX turns material search spaces into measured maps."
            description="xemX makes physical material libraries, measures many related variations, and turns the results into maps that show which material regions are worth testing next."
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
