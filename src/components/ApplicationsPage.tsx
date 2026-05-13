import { motion } from "framer-motion"
import { applicationFamilies } from "../data/siteInventory"

export function ApplicationsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="mx-auto max-w-[1200px] px-6 pb-12 pt-16 lg:px-10 lg:pt-20 xl:px-16">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Applications</p>
        <h1 className="max-w-4xl text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">
          Material questions we can help screen.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
          This page translates the campaign platform into practical markets without pretending xemX replaces final device, cell, hardware, or package validation.
        </p>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-5 px-6 pb-24 md:grid-cols-2 lg:px-10 xl:px-16">
        {applicationFamilies.map((family, index) => (
          <motion.article
            key={family.title}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.03 }}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{family.title}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {family.focus.map((item) => (
                <span key={item} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">What gets screened</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{family.measures}</p>
              </div>
              <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">Validation boundary</p>
                <p className="mt-2 text-sm leading-6 text-amber-800">{family.caution}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  )
}
