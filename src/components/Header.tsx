import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "../lib/cn"

const navItems = [
  ["How it works", "#how-it-works"],
  ["Capabilities", "#capabilities"],
  ["Applications", "#applications"],
  ["Campaign examples", "#campaign-examples"],
  ["About", "#fit"],
  ["Contact", "#contact"],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur transition",
        scrolled ? "border-slate-200 bg-slate-50/90 shadow-sm" : "border-transparent bg-slate-50/80",
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:px-10 xl:px-16">
        <a href="#top" className="flex flex-col leading-none" aria-label="xemX home">
          <span className="text-xl font-semibold tracking-tight text-slate-950">xemX</span>
          <span className="mt-1 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-slate-500">
            materials space exploration
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-blue-700">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
          >
            Discuss a campaign
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-[1200px] gap-1 text-sm font-medium text-slate-700">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-xl px-3 py-3 hover:bg-slate-50 hover:text-blue-700"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 rounded-full bg-blue-700 px-5 py-3 text-center font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Discuss a campaign
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
