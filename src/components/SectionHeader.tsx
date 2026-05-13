import { motion } from "framer-motion"
import { cn } from "../lib/cn"

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>}
    </motion.div>
  )
}
