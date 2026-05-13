import { motion } from "framer-motion"
import { campaigns } from "../data/campaigns"
import { SectionHeader } from "./SectionHeader"

export function ExampleCampaigns() {
  return (
    <section id="campaign-examples" className="border-y border-slate-200 bg-white/70">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28 xl:px-16">
        <SectionHeader
          eyebrow="Campaign examples"
          title="Concrete screening questions, not pretend case studies."
          description="These examples show the format of a useful campaign: question, sample plan, measured output, and the next validation step."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {campaigns.map((campaign, index) => {
            const rows = [
              ["Question", campaign.question],
              ["Campaign", campaign.campaign],
              ["Output", campaign.output],
              ["Next step", campaign.nextStep],
            ]

            return (
              <motion.article
                key={campaign.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">{campaign.category}</span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{campaign.title}</h3>
                <div className="mt-6 space-y-5">
                  {rows.map(([label, text]) => (
                    <div key={label}>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">{label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
