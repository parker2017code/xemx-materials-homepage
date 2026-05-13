import { BadgeEuro, Gauge, Layers3, SlidersHorizontal } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"

const cards = [
  {
    title: "Too many compositions",
    body: "Alloys, dopants, coatings, catalysts, and thin-film stacks create more options than most teams can test one by one.",
    icon: Layers3,
  },
  {
    title: "Expensive final validation",
    body: "Device-level tests, long qualification runs, and full stack builds cost too much to use as the first filter.",
    icon: Gauge,
  },
  {
    title: "Several properties matter at once",
    body: "The best candidate for one property can fail on phase, texture, conductivity, stability, or process fit.",
    icon: SlidersHorizontal,
  },
  {
    title: "Final format is too costly for blind exploration",
    body: "Full devices, cells, coated parts, or package-level builds are better used on narrowed candidates, not every early idea.",
    icon: BadgeEuro,
  },
]

export function ProblemCards() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28 xl:px-16">
      <SectionHeader
        eyebrow="The problem"
        title="Material development gets slow when every option needs its own test."
        description="Many R&D teams know the property they need, but not which composition, coating, interface, or process condition will get them there. Testing one material at a time is slow. Final validation is expensive. Literature and simulations can help, but they do not replace measured data from real samples."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
