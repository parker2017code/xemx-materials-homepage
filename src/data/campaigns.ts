export type Campaign = {
  title: string
  category: string
  question: string
  campaign: string
  output: string
  nextStep: string
}

export const campaigns: Campaign[] = [
  {
    title: "Low-resistance thin films",
    category: "Semiconductor materials",
    question:
      "Which W, Mo, Ru, or related composition region gives useful electrical resistance at thin-film thickness?",
    campaign:
      "Map composition, phase, texture, and resistivity across a thin-film library.",
    output: "Candidate regions for customer-specific process or device validation.",
    nextStep: "Run tighter process windows on the selected film families.",
  },
  {
    title: "AlScN film screening",
    category: "RF acoustic films",
    question:
      "Which AlScN composition and process window gives the needed texture without unwanted phase formation?",
    campaign:
      "Create gradient libraries and compare composition, structure, and electrical or acoustic proxies.",
    output: "Composition regions that deserve resonator-level testing.",
    nextStep: "Transfer the best windows into customer device stacks.",
  },
  {
    title: "Electrochemical catalyst search",
    category: "Electrochemical materials",
    question:
      "Which mixed-metal surface gives the best activity and stability for the chosen reaction?",
    campaign:
      "Prepare a catalyst library and run localized electrochemical measurements across the sample.",
    output: "Measured activity map with regions to repeat or refine.",
    nextStep: "Validate selected catalysts under the customer test protocol.",
  },
  {
    title: "Conductive protective coating",
    category: "Coatings and interfaces",
    question:
      "Which coating region keeps conductivity while improving durability or chemical stability?",
    campaign:
      "Screen composition, structure, resistance, and mechanical response across a coating library.",
    output: "Tradeoff map showing where performance starts to fail.",
    nextStep: "Build a smaller validation set around the best tradeoff region.",
  },
  {
    title: "Magnetic thin-film screening",
    category: "Magnetic materials",
    question:
      "Which composition regions show useful magnetic response while keeping the needed phase and structure?",
    campaign:
      "Screen composition, structure, and magnetic behavior across a thin-film material library.",
    output: "Magnetic response map tied to composition and phase data.",
    nextStep: "Move selected regions into stack-specific or device-adjacent validation.",
  },
  {
    title: "Optical coating screen",
    category: "Optical films",
    question:
      "Which oxide or nitride film regions balance transparency, reflectance, absorption, and stability-relevant behavior?",
    campaign:
      "Map optical response, composition, and structure across a controlled thin-film library.",
    output: "Optical-property map showing candidate regions and tradeoffs.",
    nextStep: "Prepare follow-up films for customer coating or photonic test structures.",
  },
  {
    title: "Battery interface layer",
    category: "Battery interfaces",
    question:
      "Which thin interface or current-collector coating candidates deserve full cell validation?",
    campaign:
      "Screen composition, structure, surface behavior, and relevant electrochemical response across candidate layers.",
    output: "Shortlist of interface regions for the customer battery test protocol.",
    nextStep: "Validate selected layers in the customer's final cell or stack format.",
  },
]
