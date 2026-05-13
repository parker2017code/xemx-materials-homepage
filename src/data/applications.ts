export type Application = {
  title: string
  description: string
  fit: string
  examples: string[]
}

export const applications: Application[] = [
  {
    title: "Electrocatalyst discovery",
    description:
      "Catalyst and electrode material libraries where local activity, stability, and surface response need to be compared across many compositions.",
    fit: "Useful for HER, OER, ORR, and complex catalyst compositions before full-cell or hardware testing.",
    examples: ["HER / OER", "ORR", "complex catalysts"],
  },
  {
    title: "Complex alloys and solid solutions",
    description:
      "High-entropy alloys, complex solid solutions, shape-memory directions, and multicomponent spaces where useful regions are hard to guess from single samples.",
    fit: "Useful when composition changes phase, activity, hardness, electrical behavior, or magnetic response.",
    examples: ["high-entropy alloys", "complex solid solutions", "shape-memory alloys"],
  },
  {
    title: "Oxide and nitride libraries",
    description:
      "Reactive sputtered oxide and nitride libraries where composition, structure, stoichiometry, and properties need to be mapped together.",
    fit: "Useful for electrocatalyst-relevant oxides, functional nitrides, hard films, optical films, and semiconductor-adjacent layers.",
    examples: ["perovskite oxides", "transition-metal nitrides", "functional oxides"],
  },
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
    title: "Magnetic thin films",
    description:
      "Magnetic multilayers and composition spaces where phase, coercivity, and magnetic response need to be mapped.",
    fit: "Useful when magnetic behavior changes sharply with composition.",
    examples: ["multilayers", "coercivity", "magnetic response"],
  },
  {
    title: "Optical and photoelectrochemical films",
    description:
      "Thin films where transparency, reflectance, absorption, conductivity, stability, or photoresponse need to be balanced.",
    fit: "Useful before committing to multilayer coating designs, photonic tests, or photoelectrochemical validation.",
    examples: ["transparent films", "reflectance", "photoresponse"],
  },
  {
    title: "Protective and packaging interfaces",
    description:
      "Bonding layers, diffusion barriers, adhesion layers, conductive protective surfaces, and interface materials.",
    fit: "Useful when interface or surface-layer candidates need to be narrowed before hardware or package-level reliability testing.",
    examples: ["bonding layers", "diffusion barriers", "conductive surfaces"],
  },
]
