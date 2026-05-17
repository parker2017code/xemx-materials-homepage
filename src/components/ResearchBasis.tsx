import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"

const rows = [
  {
    label: "Physical material libraries",
    basis:
      "xemX can make thin-film libraries with many related compositions in one campaign, including 100 mm formats and multielement co-sputtered samples.",
    use:
      "The output is a measured composition-property map that shows which material regions deserve follow-up.",
  },
  {
    label: "Localized electrochemical screening",
    basis:
      "For catalyst, electrode, corrosion-relevant, CO2-reduction, and battery-interface questions, xemX can screen local activity, stability, and surface response before a full customer protocol.",
    use:
      "The goal is to narrow the search space before the next expensive electrochemical or device-level test.",
  },
  {
    label: "Project-dependent follow-up",
    basis:
      "Microscopy, fabrication, interface analysis, and partner-supported characterization can come in when the material question calls for them.",
    use:
      "Final device, cell, stack, package, fab, production, or qualification testing stays outside the standard campaign claim.",
  },
]

export function ResearchBasis() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20 xl:px-16">
      <SectionHeader
        eyebrow="Experimental materials search"
        title="Make real samples, measure the map, choose the next test."
        description="xemX helps R&D teams test many real material variations, measure which versions look best, and narrow options before expensive validation."
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
