import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"

const stages = [
  "Large search space",
  "xemX campaign",
  "Measured material map",
  "Selected candidates",
  "Customer validation",
]

export function FitPipeline() {
  return (
    <section id="fit" className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20 xl:px-16">
      <div className="rounded-[2rem] border border-blue-100 bg-blue-50/65 p-6 shadow-sm sm:p-8 lg:p-10">
        <SectionHeader
          eyebrow="Fit"
          title="Where a campaign helps"
          description="Use xemX before full validation, when the material space is still too large and the next test is expensive."
        />

        <motion.div
          className="mt-8 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          {stages.map((stage, index) => (
            <div key={stage} className="contents">
              <div className="rounded-2xl border border-blue-100 bg-white px-4 py-4 text-center text-sm font-semibold text-slate-800 shadow-sm">
                {stage}
              </div>
              {index < stages.length - 1 && (
                <div className="flex justify-center text-blue-700">
                  <ArrowRight className="hidden h-5 w-5 lg:block" />
                  <div className="h-5 w-px bg-blue-200 lg:hidden" />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        <p className="mt-8 max-w-4xl rounded-3xl border border-blue-100 bg-white p-5 text-sm leading-6 text-slate-600">
          Final device integration, full cell or stack tests, long-duration qualification, package reliability, semiconductor integration, and manufacturing transfer happen after screening.
        </p>
      </div>
    </section>
  )
}
