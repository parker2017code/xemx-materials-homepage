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
    <section className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20 xl:px-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <SectionHeader
          eyebrow="Extended project support"
          title="Broader support when a material map needs deeper follow-up"
          description="Some campaigns benefit from deeper follow-up after the first material map. Bochum-based characterization, microscopy, microfabrication, interface analysis, localized electrochemistry, and data-analysis expertise can support that work."
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
          These routes sit downstream of the core screening campaign and help explain or prepare selected candidate regions.
        </p>
      </div>
    </section>
  )
}
