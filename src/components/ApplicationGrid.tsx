import { motion } from "framer-motion"
import { applications } from "../data/applications"
import { SectionHeader } from "./SectionHeader"

export function ApplicationGrid() {
  return (
    <section id="applications" className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28 xl:px-16">
      <SectionHeader
        eyebrow="Applications"
        title="Material questions we can help screen"
        description="Each application should be written as a practical material question, with final device, cell, package, or hardware validation kept in the right place."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {applications.map((application, index) => (
          <motion.article
            key={application.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.03 }}
          >
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">{application.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{application.description}</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">{application.fit}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {application.examples.map((example) => (
                <span key={example} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-500">
                  {example}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
