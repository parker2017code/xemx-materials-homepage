import { BarChart3, Boxes, Droplets, Microscope } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"

const capabilityGroups = [
  {
    title: "Core: thin-film material libraries",
    description:
      "Combinatorial thin-film material libraries, composition-gradient samples, co-sputtering, reactive sputtering, 100 mm wafer formats, and multicomponent material spaces.",
    icon: Boxes,
    items: ["real samples", "composition gradients", "multicomponent spaces", "wafer libraries"],
  },
  {
    title: "High-throughput measured maps",
    description:
      "Composition, phase, structure, electrical, mechanical, optical, and magnetic measurements are tied back to positions in the library.",
    icon: Microscope,
    items: ["composition", "phase and structure", "electrical", "mechanical, optical, magnetic"],
  },
  {
    title: "Localized electrochemical screening",
    description:
      "Localized electrochemical screening compares activity, stability, and surface response across catalyst, electrode, and related surface material libraries.",
    icon: Droplets,
    items: ["SDC", "SECCM routes", "activity and stability", "surface response"],
  },
  {
    title: "Data-guided iteration",
    description:
      "Measured maps support experimental design, multi-property tradeoff comparison, data-guided measurement choices, and next-campaign decisions.",
    icon: BarChart3,
    items: ["composition-property maps", "tradeoff comparison", "measurement follow-up", "next campaign"],
  },
]

export function CapabilityGrid() {
  return (
    <section id="capabilities" className="border-y border-slate-200 bg-white/70">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20 xl:px-16">
        <SectionHeader
          eyebrow="Capabilities"
          title="What a xemX campaign can include"
          description="xemX is best understood by the campaign engine: make physical libraries, measure the map, compare tradeoffs, and decide what deserves validation."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {capabilityGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.article
                key={group.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Layer {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>

        <p className="mt-8 max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-600">
          The measurement plan changes by project. The common output is a measured map for choosing the next validation step.
        </p>
      </div>
    </section>
  )
}
