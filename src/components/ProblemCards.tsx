import { BadgeEuro, Gauge, Layers3, SlidersHorizontal } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"

const cards = [
  {
    title: "Too many compositions",
    body: "Alloys, oxides, nitrides, catalysts, dopants, interfaces, and thin-film stacks create more options than most teams can test one by one.",
    icon: Layers3,
  },
  {
    title: "Validation is expensive",
    body: "Device-level tests, long qualification runs, and full stack builds should start from narrowed candidates.",
    icon: Gauge,
  },
  {
    title: "Several properties matter at once",
    body: "A usable candidate has to keep phase, texture, conductivity, stability, process fit, and the target property within range.",
    icon: SlidersHorizontal,
  },
  {
    title: "Full builds come later",
    body: "Full devices, cells, coated parts, and package-level builds make sense after the early screen removes weak regions.",
    icon: BadgeEuro,
  },
]

export function ProblemCards() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20 xl:px-16">
      <SectionHeader
        eyebrow="The problem"
        title="Material development gets slow when every option needs its own test."
        description="R&D teams often know the target property. The hard part is choosing the composition, dopant, coating, thin-film stack, surface chemistry, interface, or process condition worth testing next."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon
          return (
            <motion.article
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.body}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
