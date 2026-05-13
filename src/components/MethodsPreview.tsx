import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"

const methods = [
  "Co-sputtering",
  "Reactive sputtering",
  "Composition mapping",
  "Phase mapping",
  "Electrical screening",
  "Mechanical screening",
  "Optical / magnetic screening",
  "Localized electrochemical screening",
]

export function MethodsPreview() {
  return (
    <section id="methods" className="border-y border-slate-200 bg-white/70">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <SectionHeader
            eyebrow="Methods"
            title="Methods used in campaigns"
            description="Methods should support the customer decision. The homepage names enough tools to build trust, while a later methods page can explain the details."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {methods.map((method, index) => (
              <motion.div
                key={method}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-800 shadow-sm"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
              >
                {method}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
