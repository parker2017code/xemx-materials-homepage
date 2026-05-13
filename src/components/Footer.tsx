export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 py-8 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between lg:px-10 xl:px-16">
        <div>
          <img src="/xemx-logo.svg" alt="xemX" className="h-auto w-28" />
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">materials space exploration</p>
        </div>
        <p className="max-w-xl leading-6">
          Experimental campaigns for material search problems: real libraries, measured maps, and clearer choices about what to validate next.
        </p>
      </div>
    </footer>
  )
}
