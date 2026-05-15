import { ArrowRight } from "lucide-react"
import { WaferVisual } from "./WaferVisual"

const proofChips = [
  "100 mm thin-film libraries",
  "342 measured compositions",
  "Up to 7 co-sputtered elements",
  "Composition-property maps",
  "SDC / SECCM electrochemistry",
  "Data-guided follow-up",
]

export function Hero() {
  return (
    <section id="top" className="mx-auto grid w-full max-w-[1200px] gap-10 overflow-x-clip px-6 pb-12 pt-12 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:px-10 lg:pb-16 lg:pt-16 xl:px-16">
      <div className="flex min-w-0 max-w-full flex-col justify-center">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          Materials screening campaigns
        </p>
        <h1 className="max-w-full break-words text-[1.75rem] font-semibold leading-[1.1] tracking-tight text-slate-950 [overflow-wrap:anywhere] min-[380px]:text-[1.95rem] sm:max-w-4xl sm:text-6xl lg:text-[4rem]">
          Map real material variations before the next validation run.
        </h1>
        <p className="mt-6 max-w-full break-words text-[1.05rem] leading-8 text-slate-600 [overflow-wrap:anywhere] sm:max-w-2xl sm:text-xl sm:leading-9">
          xemX builds thin-film material libraries, measures how properties change, and gives R&D teams a map for the next test.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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

        <div className="mt-7 flex max-w-full min-w-0 flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          {proofChips.map((chip) => (
            <span key={chip} className="min-w-0 max-w-full whitespace-normal break-words rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium leading-5 text-slate-700 shadow-sm [overflow-wrap:anywhere]">
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="min-w-0 max-w-full">
        <WaferVisual />
      </div>
    </section>
  )
}
