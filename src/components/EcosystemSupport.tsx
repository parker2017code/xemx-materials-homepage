import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"

const support = [
  "electron microscopy",
  "nanoscale composition analysis",
  "cross-section preparation",
  "scanning probe methods",
  "localized electrochemistry",
  "micro/nano fabrication support",
  "advanced interface analysis",
  "data analysis and modeling",
]

export function EcosystemSupport() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28 xl:px-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <SectionHeader
          eyebrow="Extended project support"
          title="Broader support when a material map needs deeper follow-up"
          description="Some campaigns need deeper follow-up after the first material map. Through the Bochum materials and interfaces environment, selected projects may connect to additional characterization, microscopy, microfabrication, interface analysis, localized electrochemistry, and data-analysis expertise."
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {support.map((item, index) => (
            <motion.div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
            >
              {item}
            </motion.div>
          ))}
        </div>

        <p className="mt-6 max-w-4xl text-sm leading-6 text-slate-500">
          This should stay framed as selected project support, not as a standard product menu or a claim that every tool is owned by xemX.
        </p>
      </div>
    </section>
  )
}
