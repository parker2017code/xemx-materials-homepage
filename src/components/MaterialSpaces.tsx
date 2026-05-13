import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"

const spaces = [
  {
    title: "Complex alloys",
    text: "High-entropy alloys, complex solid solutions, and shape-memory directions where composition, phase, resistance, hardness, or magnetic behavior can shift quickly.",
  },
  {
    title: "Oxides and nitrides",
    text: "Reactive sputtering routes for oxide and nitride libraries where structure and stoichiometry matter.",
  },
  {
    title: "Conductive thin films",
    text: "Metal and compound films where sheet resistance, phase, texture, and process fit need early screening.",
  },
  {
    title: "Catalysts and electrodes",
    text: "Composition libraries compared by local electrochemical activity, stability, or surface response before cell or hardware testing.",
  },
  {
    title: "Photoelectrochemical films",
    text: "Semiconductor and oxide film libraries where optical response and electrochemical behavior need to be read together.",
  },
  {
    title: "Magnetic films",
    text: "Thin-film libraries for magnetic response, coercivity, anisotropy, or rare-earth-reduced directions.",
  },
  {
    title: "Optical films",
    text: "Thin films where transparency, reflectance, absorption, and composition need to be mapped together.",
  },
  {
    title: "Interface layers",
    text: "Bonding, barrier, adhesion, current collector, or package-adjacent films before final-format validation.",
  },
  {
    title: "Functional surface layers",
    text: "Protective or conductive surface layers where durability, electrical behavior, or chemical stability need to be balanced.",
  },
]

export function MaterialSpaces() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20 xl:px-16">
      <SectionHeader
        eyebrow="Material spaces"
        title="Material spaces that fit this approach"
        description="These spaces fit when a physical library and measured property map can reduce the number of final-format tests."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {spaces.map((space, index) => (
          <motion.article
            key={space.title}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.03 }}
          >
            <h3 className="text-lg font-semibold text-slate-950">{space.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{space.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
