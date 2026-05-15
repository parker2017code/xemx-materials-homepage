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
    <div className="rounded-xl border border-blue-100 bg-blue-50/55 px-3 py-3 text-left">
      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-blue-700">{label}</p>
      <p className="mt-1 break-words text-sm font-semibold leading-snug text-slate-900">{value}</p>
    </div>
  )
}

export function WaferVisual() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:p-5">
      <div className="mb-4 grid min-w-0 gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          real samples
        </span>
        <span className="min-w-0 text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-slate-500">
          100 mm wafer library
        </span>
      </div>

      <div className="grid min-w-0 gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
        <div className="grid min-w-0 place-items-center rounded-2xl border border-slate-100 bg-slate-50/70 p-3">
          <svg
            viewBox="12 12 186 186"
            className="h-auto w-full max-w-[260px]"
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
              <clipPath id="waferClip">
                <circle cx="105" cy="105" r="88" />
              </clipPath>
            </defs>
            <circle cx="105" cy="105" r="88" fill="url(#waferGradient)" stroke="#CBD5E1" strokeWidth="1.5" />
            <circle cx="105" cy="105" r="88" fill="url(#waferSweep)" />
            <g clipPath="url(#waferClip)" opacity="0.34">
              <path d="M-8 154L154 -8" stroke="#2563EB" strokeWidth="18" strokeOpacity="0.13" />
              {Array.from({ length: 9 }, (_, index) => {
                const position = 41 + index * 16
                return (
                  <g key={position}>
                    <path d={`M${position} 20V190`} stroke="#475569" strokeOpacity="0.16" strokeWidth="0.55" />
                    <path d={`M20 ${position}H190`} stroke="#475569" strokeOpacity="0.16" strokeWidth="0.55" />
                  </g>
                )
              })}
              <circle cx="105" cy="105" r="54" fill="none" stroke="#2563EB" strokeOpacity="0.18" strokeWidth="0.8" />
              <circle cx="105" cy="105" r="72" fill="none" stroke="#0F766E" strokeOpacity="0.14" strokeWidth="0.8" />
            </g>
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
          </svg>
        </div>

        <div className="grid min-w-0 content-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <div className="grid min-w-0 gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
            <p className="min-w-0 text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-slate-500">measured map</p>
            <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[0.68rem] font-semibold text-blue-700">screened</span>
          </div>
          <div className="grid grid-cols-8 gap-1.5">
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
          <div className="h-14 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <svg viewBox="0 0 220 56" className="h-full w-full" aria-label="Measured property curve">
              <path d="M4 46C28 42 38 26 59 29C80 32 81 13 101 14C127 15 126 37 151 33C176 30 181 12 216 9" fill="none" stroke="#DBEAFE" strokeWidth="9" strokeLinecap="round" />
              <path d="M4 46C28 42 38 26 59 29C80 32 81 13 101 14C127 15 126 37 151 33C176 30 181 12 216 9" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-xs leading-5 text-slate-500">Measured points become a map for the next decision.</p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Metric label="library" value="composition gradient" />
        <Metric label="output" value="measured map" />
        <Metric label="next" value="candidate regions" />
      </div>
    </div>
  )
}
