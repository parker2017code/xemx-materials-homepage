import { motion } from "framer-motion"
import { capabilities } from "../data/capabilities"
import { SectionHeader } from "./SectionHeader"

export function CapabilityGrid() {
  return (
    <section id="capabilities" className="border-y border-slate-200 bg-white/70">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28 xl:px-16">
        <SectionHeader
          eyebrow="Capabilities"
          title="What can be measured"
          description="The measurement plan is built around the decision the customer needs to make."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.article
                key={capability.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{capability.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{capability.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {capability.technicalNote}
                </p>
              </motion.article>
            )
          })}
        </div>

        <p className="mt-8 max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-600">
          Not every measurement is used in every project. The campaign is designed around the decision the customer needs to make.
        </p>
      </div>
    </section>
  )
}
