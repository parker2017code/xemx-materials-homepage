import { motion } from "framer-motion"
import { decisionBrief, decisionConnectors } from "../data/decisionBrief"

export function DecisionBrief() {
  return (
    <section aria-label="Campaign decision flow" className="mx-auto max-w-[1200px] px-6 pb-14 lg:px-10 lg:pb-16 xl:px-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
          {decisionBrief.map((item, index) => {
            const Icon = item.icon
            const Connector = decisionConnectors[index]

            return (
              <div key={item.title} className="contents">
                <motion.article
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                      <h2 className="mt-2 text-lg font-semibold leading-snug text-slate-950">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </motion.article>
                {Connector && (
                  <div className="flex items-center justify-center text-blue-700" aria-hidden="true">
                    <Connector className="hidden h-5 w-5 lg:block" />
                    <div className="h-5 w-px bg-blue-200 lg:hidden" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
