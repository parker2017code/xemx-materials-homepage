import { motion } from "framer-motion"
import { campaignSteps } from "../data/steps"
import { SectionHeader } from "./SectionHeader"

export function CampaignSteps() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28 xl:px-16">
      <SectionHeader
        eyebrow="Campaign workflow"
        title="From material question to measured map."
        description="A campaign starts with a practical question: which material region is worth testing next?"
      />

      <div className="relative mt-12 grid gap-5 lg:grid-cols-2">
        <div className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-slate-200 lg:block" />
        {campaignSteps.map((step, index) => (
          <motion.article
            key={step.title}
            className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                <p className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-500">{step.example}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
