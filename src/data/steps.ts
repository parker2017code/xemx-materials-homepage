export type CampaignStep = {
  title: string
  description: string
  example: string
}

export const campaignSteps: CampaignStep[] = [
  {
    title: "Define the material question",
    description: "What property needs to improve? What material family is in scope? What constraints matter?",
    example: "Example: lower resistance without losing phase control.",
  },
  {
    title: "Design the search space",
    description: "Choose the composition range, process variables, sample layout, and measurement plan.",
    example: "Example: three-element gradient with fixed thickness.",
  },
  {
    title: "Create real samples",
    description: "Build a physical material library where each position represents a different variant.",
    example: "Example: one wafer with a controlled composition gradient.",
  },
  {
    title: "Measure the library",
    description: "Collect direct measurements from many points instead of treating the library as one average sample.",
    example: "Example: composition, structure, and resistance at matched points.",
  },
  {
    title: "Read the map",
    description: "Compare properties across the material space and locate promising or failing regions.",
    example: "Example: resistance improves, but phase changes outside a narrow window.",
  },
  {
    title: "Move toward validation",
    description: "Select candidates for a smaller follow-up campaign or customer validation workflow.",
    example: "Example: three regions move into device-level testing.",
  },
]
