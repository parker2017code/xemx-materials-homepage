import { Mail } from "lucide-react"
import { useState } from "react"
import { SectionHeader } from "./SectionHeader"

const fields = [
  { label: "Name", type: "text", name: "name", required: true, autoComplete: "name" },
  { label: "Company", type: "text", name: "company", required: true, autoComplete: "organization" },
  { label: "Email", type: "email", name: "email", required: true, autoComplete: "email" },
  { label: "Material system", type: "text", name: "material-system", required: true, autoComplete: "off" },
  { label: "Target property", type: "text", name: "target-property", required: true, autoComplete: "off" },
  { label: "Current testing method", type: "text", name: "current-testing-method", required: false, autoComplete: "off" },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-16 lg:grid-cols-[0.85fr_1fr] lg:px-10 lg:py-20 xl:px-16">
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
              The first exchange should name the material family, the property target, and the current test bottleneck.
            </p>
          </div>
        </div>

        <form
          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7"
          action="mailto:info@xemx-materials.com"
          method="post"
          encType="text/plain"
          onSubmit={() => setSubmitted(true)}
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3">
            <p className="text-sm font-semibold text-slate-900">Material question brief</p>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Required fields marked *</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.name} className="grid gap-2 text-sm font-semibold text-slate-800">
                <span>
                  {field.label}
                  {field.required && <span className="text-blue-700"> *</span>}
                </span>
                <input
                  className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  autoComplete={field.autoComplete}
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
              <span>
                Current testing bottleneck <span className="text-blue-700">*</span>
              </span>
              <textarea
                className="min-h-28 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                name="current-testing-bottleneck"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
              <span>
                What result would change the next experiment? <span className="text-blue-700">*</span>
              </span>
              <textarea
                className="min-h-28 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                name="next-experiment-result"
                required
              />
            </label>
          </div>

          {submitted && (
            <p className="mt-5 rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm leading-6 text-slate-600" role="status">
              Your email client opens with the material question details. If it does not open, send the same fields to info@xemx-materials.com.
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:w-auto"
          >
            Send material question
          </button>
        </form>
      </div>
    </section>
  )
}
