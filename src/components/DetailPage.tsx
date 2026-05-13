import { motion } from "framer-motion"
import type { DetailGroup } from "../data/siteInventory"

const statusLabel = {
  core: "Core",
  support: "Support",
}

const statusClass = {
  core: "bg-blue-50 text-blue-700",
  support: "bg-teal-50 text-teal-700",
}

type DetailPageProps = {
  eyebrow: string
  title: string
  description: string
  groups: DetailGroup[]
}

export function DetailPage({ eyebrow, title, description, groups }: DetailPageProps) {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="mx-auto max-w-[1200px] px-6 pb-12 pt-16 lg:px-10 lg:pt-20 xl:px-16">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{eyebrow}</p>
        <h1 className="max-w-4xl text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-8 px-6 pb-24 lg:px-10 xl:px-16">
        {groups.map((group) => (
          <motion.div
            key={group.title}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
          >
            <div className="grid gap-4 lg:grid-cols-[0.45fr_1fr]">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{group.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{group.intro}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {group.items.map((item) => (
                  <article key={item.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-slate-950">{item.name}</h3>
                      {item.status && (
                        <span className={`rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] ${statusClass[item.status]}`}>
                          {statusLabel[item.status]}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.plain}</p>
                    {item.technical && (
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{item.technical}</p>
                    )}
                    {item.note && <p className="mt-3 text-sm leading-6 text-amber-700">{item.note}</p>}
                  </article>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
