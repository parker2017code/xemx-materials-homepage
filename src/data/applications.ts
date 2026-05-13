export type Application = {
  title: string
  description: string
  fit: string
  examples: string[]
}

export const applications: Application[] = [
  {
    title: "Semiconductor thin films",
    description:
      "Thin layers around contacts, barriers, liners, caps, gate insulators, memory stacks, and isolation areas.",
    fit:
      "Useful when composition, phase, resistivity, or texture need to be narrowed before device-level testing.",
    examples: ["contact metals", "barrier layers", "memory stacks"],
  },
  {
    title: "RF acoustic films",
    description:
      "AlN, AlScN, ScAlN, and related piezoelectric films where composition and texture affect device behavior.",
    fit: "Useful when composition windows need to be selected before resonator-level testing.",
    examples: ["AlScN", "texture windows", "piezoelectric response"],
  },
  {
    title: "Electrochemical materials",
    description:
      "Catalyst and electrode materials where activity and stability need to be compared across many variants.",
    fit: "Useful for water electrolysis, CO2 electrolysis, electrode surfaces, and mixed-metal compositions.",
    examples: ["mixed metals", "activity", "surface chemistry"],
  },
  {
    title: "Protective coatings",
    description:
      "Coatings that need to balance hardness, durability, conductivity, optical behavior, or chemical stability.",
    fit: "Useful when one property alone is not enough, such as protection plus electrical behavior.",
    examples: ["hard films", "conductive coatings", "stable surfaces"],
  },
  {
    title: "Battery interfaces",
    description:
      "Thin coatings, current collector surfaces, solid-state battery interfaces, and protective layers.",
    fit: "Useful for early screening before full cell validation.",
    examples: ["collector surfaces", "solid-state interfaces", "protective layers"],
  },
  {
    title: "Magnetic thin films",
    description:
      "Magnetic multilayers and composition spaces where phase, coercivity, and magnetic response need to be mapped.",
    fit: "Useful when magnetic behavior changes sharply with composition.",
    examples: ["multilayers", "coercivity", "magnetic response"],
  },
  {
    title: "Optical coatings",
    description:
      "Thin films where transparency, reflectance, absorption, conductivity, or stability need to be balanced.",
    fit: "Useful before committing to multilayer coating designs.",
    examples: ["transparent films", "reflectance", "absorbers"],
  },
  {
    title: "Advanced packaging interfaces",
    description:
      "Bonding layers, diffusion barriers, adhesion layers, surface layers, and interface materials.",
    fit: "Useful when interface materials need to be narrowed before package-level reliability testing.",
    examples: ["bonding layers", "diffusion barriers", "adhesion layers"],
  },
]
