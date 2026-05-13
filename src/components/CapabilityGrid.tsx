import { BarChart3, Boxes, Microscope, Network } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"

const capabilityGroups = [
  {
    title: "Core campaign platform",
    description:
      "Physical material libraries, composition-gradient samples, co-sputtering, reactive sputtering, 100 mm wafer libraries, hundreds of measured points, multicomponent material spaces, and follow-on samples where appropriate.",
    icon: Boxes,
    items: ["material libraries", "composition gradients", "multicomponent spaces", "follow-on samples"],
  },
  {
    title: "Measurement stack",
    description:
      "Composition mapping, phase and structure mapping, electrical screening, mechanical screening, optical screening, magnetic screening, and localized electrochemical screening.",
    icon: Microscope,
    items: ["composition", "phase and structure", "electrical and mechanical", "optical, magnetic, electrochemical"],
  },
  {
    title: "Campaign intelligence",
    description:
      "Experimental design, composition-property maps, multi-property tradeoff comparison, active learning, Bayesian optimization, and next-campaign selection.",
    icon: BarChart3,
    items: ["experimental design", "tradeoff comparison", "active learning", "next-campaign selection"],
  },
  {
    title: "Extended ecosystem access",
    description:
      "Selected projects can connect to broader Bochum-based characterization, microscopy, interface analysis, localized electrochemistry, micro/nano-fabrication, and data-analysis resources.",
    icon: Network,
    items: ["microscopy", "interface analysis", "localized electrochemistry", "micro/nano-fabrication"],
  },
]

export function CapabilityGrid() {
  return (
    <section id="capabilities" className="border-y border-slate-200 bg-white/70">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28 xl:px-16">
        <SectionHeader
          eyebrow="Capabilities"
          title="What a xemX campaign can include"
          description="The homepage should not start with an equipment list. It should show how the campaign is built around the material decision."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
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
          Not every method belongs in every project. The campaign is designed around the decision the customer needs to make, not around filling a generic measurement menu.
        </p>
      </div>
    </section>
  )
}
