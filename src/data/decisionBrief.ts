import { ClipboardList, FlaskConical, MapPinned, MoveRight } from "lucide-react"

export const decisionBrief = [
  {
    label: "Make libraries",
    title: "Put many related compositions on one sample.",
    text: "Use co-sputtered thin-film libraries and composition gradients instead of one sample at a time.",
    icon: ClipboardList,
  },
  {
    label: "Measure systematically",
    title: "Map what formed and how it behaves.",
    text: "Measure composition, structure, and the properties that matter to the material question.",
    icon: FlaskConical,
  },
  {
    label: "Narrow candidates",
    title: "Use the map to choose the next test.",
    text: "Compare tradeoffs, rule out weak regions, and focus follow-up work where the data points.",
    icon: MapPinned,
  },
]

export const decisionConnectors = [MoveRight, MoveRight]
