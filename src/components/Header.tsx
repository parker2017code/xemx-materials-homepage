import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "../lib/cn"

const navItems = [
  ["Home", "#/"],
  ["Capabilities", "#/capabilities"],
  ["Methods", "#/methods"],
  ["Applications", "#/applications"],
  ["Examples", "#/examples"],
  ["Contact", "#/contact"],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#\/?/, "") || "home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace(/^#\/?/, "") || "home")
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur transition",
        scrolled ? "border-slate-200 bg-slate-50/90 shadow-sm" : "border-transparent bg-slate-50/80",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1200px] min-w-0 items-center justify-between gap-3 px-6 py-4 lg:px-10 xl:px-16">
        <a href="#/" className="min-w-0 max-w-[250px] flex flex-col leading-none lg:max-w-none" aria-label="xemX home">
          <span className="text-xl font-semibold tracking-tight text-slate-950">xemX</span>
          <span className="mt-1 truncate text-[0.72rem] font-medium uppercase leading-tight tracking-[0.14em] text-slate-500 lg:whitespace-normal xl:tracking-[0.18em]">
            materials space exploration
          </span>
        </a>

        <nav className="hidden items-center gap-3 text-sm font-medium text-slate-600 xl:gap-5 lg:flex">
          {navItems.map(([label, href]) => {
            const itemRoute = href.replace(/^#\/?/, "") || "home"
            const active = route === itemRoute || (route === "home" && itemRoute === "home")

            return (
              <a
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-2.5 py-1.5 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
                  active && "bg-white text-blue-700 shadow-sm",
                )}
              >
                {label}
              </a>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#/contact"
            className="inline-flex whitespace-nowrap rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Discuss a campaign
          </a>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-[1200px] gap-1 text-sm font-medium text-slate-700">
            {navItems.map(([label, href]) => {
              const itemRoute = href.replace(/^#\/?/, "") || "home"
              const active = route === itemRoute || (route === "home" && itemRoute === "home")

              return (
                <a
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-3 py-3 hover:bg-slate-50 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
                    active && "bg-blue-50 text-blue-700",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              )
            })}
            <a
              href="#/contact"
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
