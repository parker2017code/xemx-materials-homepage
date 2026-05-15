import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"

const rows = [
  {
    label: "Combinatorial materials libraries",
    basis:
      "The Lars Banko and Alfred Ludwig literature supports the thin-film library, 100 mm format, 342 measured compositions, multielement co-sputtering, XRD mapping, and measured-map framing.",
    use:
      "Feature the campaign as physical sample creation plus measured composition-property maps.",
  },
  {
    label: "Localized electrochemistry",
    basis:
      "The Wolfgang Schuhmann-linked literature supports SDC, SECCM-style local electrochemistry, HER, OER, ORR, water-electrolysis, activity-stability, and surface-response screening.",
    use:
      "Feature electrocatalyst, electrode, corrosion-relevant, CO2-reduction, and battery-interface questions as screened regions before the customer protocol.",
  },
  {
    label: "Bochum / ZGH follow-up",
    basis:
      "Ruhr and ZGH context supports broader characterization and interface expertise, but exact access depends on the project.",
    use:
      "Keep microscopy, fabrication, interface, and partner follow-up wording scoped and conditional.",
  },
]

export function ResearchBasis() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20 xl:px-16">
      <SectionHeader
        eyebrow="Research basis"
        title="How the sweep changes the website claims"
        description="The strongest public story is a measured-materials campaign: make the library, measure it, compare tradeoffs, and decide what deserves validation."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {rows.map((row, index) => (
          <motion.article
            key={row.label}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <h3 className="text-xl font-semibold text-slate-950">{row.label}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">{row.basis}</p>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-600">{row.use}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
