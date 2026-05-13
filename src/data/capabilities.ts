import {
  Atom,
  BarChart3,
  Gauge,
  Gem,
  Magnet,
  Microscope,
  Orbit,
  Waves,
  type LucideIcon,
} from "lucide-react"

export type Capability = {
  title: string
  description: string
  technicalNote: string
  icon: LucideIcon
}

export const capabilities: Capability[] = [
  {
    title: "Composition mapping",
    description: "Which elements are present, where they are, and in what ratio.",
    technicalNote: "EDX / WDX",
    icon: Atom,
  },
  {
    title: "Phase and structure mapping",
    description: "Which crystal structures form across the material library.",
    technicalNote: "XRD",
    icon: Microscope,
  },
  {
    title: "Electrical screening",
    description: "Sheet resistance and resistivity for conductive films and related materials.",
    technicalNote: "Four-point probe",
    icon: Gauge,
  },
  {
    title: "Mechanical screening",
    description: "Hardness and elastic modulus for coatings, hard films, and mechanically constrained layers.",
    technicalNote: "Nanoindentation",
    icon: Gem,
  },
  {
    title: "Optical screening",
    description: "Reflectance, absorption, and optical response across the material space.",
    technicalNote: "UV-VIS",
    icon: Waves,
  },
  {
    title: "Magnetic screening",
    description: "Magnetic response across composition space.",
    technicalNote: "MOKE",
    icon: Magnet,
  },
  {
    title: "Localized electrochemical screening",
    description: "Small-area electrochemical tests where activity, stability, or surface chemistry matters.",
    technicalNote: "Scanning Droplet Cell",
    icon: Orbit,
  },
  {
    title: "Data-guided iteration",
    description: "Use the first measured map to decide the next campaign.",
    technicalNote: "Active learning",
    icon: BarChart3,
  },
]
