const dots = Array.from({ length: 121 }, (_, index) => {
  const row = Math.floor(index / 11)
  const col = index % 11
  const x = 26 + col * 15.8
  const y = 28 + row * 15.6
  const dx = x - 105
  const dy = y - 104
  const inside = dx * dx + dy * dy < 78 * 78
  const highlighted = [27, 39, 51, 64, 73, 85].includes(index)
  return { x, y, inside, highlighted }
}).filter((dot) => dot.inside)

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-h-[68px] rounded-2xl border border-blue-100 bg-blue-50/55 px-4 py-3 text-left">
      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-blue-700">{label}</p>
      <p className="mt-1 break-words text-sm font-semibold leading-snug text-slate-900">{value}</p>
    </div>
  )
}

export function WaferVisual() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-7">
      <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)] lg:items-end">
        <div className="min-w-0">
          <div className="flex justify-center sm:justify-start">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              real samples
            </span>
          </div>
          <svg
            viewBox="0 0 210 210"
            className="mx-auto mt-4 h-auto w-full max-w-[320px]"
            role="img"
            aria-label="Wafer library with gradient and measured points"
          >
            <defs>
              <radialGradient id="waferGradient" cx="32%" cy="28%" r="76%">
                <stop offset="0%" stopColor="#DBEAFE" />
                <stop offset="38%" stopColor="#BFDBFE" />
                <stop offset="65%" stopColor="#CFFAFE" />
                <stop offset="100%" stopColor="#F8FAFC" />
              </radialGradient>
              <linearGradient id="waferSweep" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.22" />
                <stop offset="50%" stopColor="#0F766E" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#A16207" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <circle cx="105" cy="105" r="88" fill="url(#waferGradient)" stroke="#CBD5E1" strokeWidth="1.5" />
            <circle cx="105" cy="105" r="88" fill="url(#waferSweep)" />
            <path d="M32 151C75 122 128 117 178 137" fill="none" stroke="#1D4ED8" strokeOpacity="0.22" strokeWidth="12" />
            <path d="M28 72C69 86 114 82 176 50" fill="none" stroke="#0F766E" strokeOpacity="0.14" strokeWidth="10" />
            {dots.map((dot, index) => (
              <circle
                key={`${dot.x}-${dot.y}`}
                className={dot.highlighted ? "wafer-dot origin-center" : undefined}
                cx={dot.x}
                cy={dot.y}
                r={dot.highlighted ? 3.4 : 2.15}
                fill={dot.highlighted ? "#2563EB" : "#334155"}
                opacity={dot.highlighted ? 0.92 : 0.35 + (index % 3) * 0.1}
              />
            ))}
            <circle cx="105" cy="105" r="88" fill="none" stroke="#94A3B8" strokeOpacity="0.42" />
            <text x="105" y="202" textAnchor="middle" className="fill-slate-500 text-[8px] font-semibold uppercase tracking-[0.2em]">
              100 mm wafer library
            </text>
          </svg>
        </div>

        <div className="min-w-0 rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="min-w-0 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-slate-500">composition-property map</p>
            <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[0.68rem] font-semibold text-blue-700">screened</span>
          </div>
          <div className="mt-5 grid grid-cols-8 gap-1.5">
            {Array.from({ length: 48 }, (_, index) => {
              const row = Math.floor(index / 8)
              const col = index % 8
              const score = (row * 1.2 + col * 0.8 + (index % 3)) / 14
              const color =
                score > 0.74
                  ? "bg-blue-700"
                  : score > 0.56
                    ? "bg-blue-400"
                    : score > 0.38
                      ? "bg-cyan-200"
                      : "bg-slate-200"
              return <div key={index} className={`aspect-square rounded ${color}`} />
            })}
          </div>
          <div className="mt-5 h-20 rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <svg viewBox="0 0 220 56" className="h-full w-full" aria-label="Measured property curve">
              <path d="M4 46C28 42 38 26 59 29C80 32 81 13 101 14C127 15 126 37 151 33C176 30 181 12 216 9" fill="none" stroke="#DBEAFE" strokeWidth="9" strokeLinecap="round" />
              <path d="M4 46C28 42 38 26 59 29C80 32 81 13 101 14C127 15 126 37 151 33C176 30 181 12 216 9" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">Measured points become a map for the next decision.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        <Metric label="library" value="composition gradient" />
        <Metric label="output" value="measured map" />
        <Metric label="next" value="candidate regions" />
      </div>
    </div>
  )
}
