import { Mail } from "lucide-react"
import { SectionHeader } from "./SectionHeader"

const fields = [
  { label: "Name", type: "text", name: "name" },
  { label: "Company", type: "text", name: "company" },
  { label: "Email", type: "email", name: "email" },
  { label: "Material system", type: "text", name: "material-system" },
  { label: "Target property", type: "text", name: "target-property" },
]

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1fr] lg:px-10 lg:py-28 xl:px-16">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Start with the material question."
            description="Tell us what material system you are working on, which property needs to improve, and how you test candidates today."
          />
          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Mail className="h-5 w-5" />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              The first useful exchange is usually a short description of the material family, the property target, and the current test bottleneck.
            </p>
          </div>
        </div>

        <form className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7" action="#" method="post">
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.name} className="grid gap-2 text-sm font-semibold text-slate-800">
                {field.label}
                <input
                  className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  type={field.type}
                  name={field.name}
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
              Current testing bottleneck
              <textarea
                className="min-h-28 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                name="current-testing-bottleneck"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
              What would make a useful screening result?
              <textarea
                className="min-h-28 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                name="useful-screening-result"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:w-auto"
          >
            Send material question
          </button>
        </form>
      </div>
    </section>
  )
}
