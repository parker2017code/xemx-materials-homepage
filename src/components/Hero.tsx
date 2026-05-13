import { ArrowRight } from "lucide-react"
import { WaferVisual } from "./WaferVisual"

const proofChips = [
  "Physical material libraries",
  "Hundreds of measured points",
  "Composition-property maps",
  "Electrical, mechanical, optical, magnetic, and electrochemical screening",
  "Data-guided follow-up",
]

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-[1200px] gap-12 overflow-hidden px-6 pb-20 pt-16 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:px-10 lg:pb-28 xl:px-16">
      <div className="min-w-0 max-w-[calc(100vw-3rem)] flex flex-col justify-center lg:max-w-none">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          Materials space exploration
        </p>
        <h1 className="max-w-4xl text-[2.2rem] font-semibold leading-[1.08] tracking-tight text-slate-950 min-[380px]:text-[2.35rem] sm:text-6xl lg:text-[4rem]">
          Find the material regions worth testing next.
        </h1>
        <p className="mt-7 max-w-full text-lg leading-8 text-slate-600 sm:max-w-2xl sm:text-xl sm:leading-9">
          xemX designs experimental campaigns for large material search spaces. We create real material libraries, measure how properties change across them, and help R&D teams narrow candidates before expensive validation.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:w-auto"
          >
            Discuss a campaign
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 sm:w-auto"
          >
            See how it works
          </a>
        </div>

        <div className="mt-8 flex max-w-full min-w-0 flex-wrap gap-2.5">
          {proofChips.map((chip) => (
            <span key={chip} className="min-w-0 max-w-full whitespace-normal break-words rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium leading-5 text-slate-700 shadow-sm [overflow-wrap:anywhere]">
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="min-w-0 max-w-[calc(100vw-3rem)] lg:max-w-none">
        <WaferVisual />
      </div>
    </section>
  )
}
