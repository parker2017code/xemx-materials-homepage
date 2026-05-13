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
        scrolled ? "border-[#9dc3fa]/25 bg-[#000030]/95 shadow-sm" : "border-[#c3c3fa]/15 bg-[#000030]/90",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1200px] min-w-0 items-center justify-between gap-3 px-6 py-4 lg:px-10 xl:px-16">
        <a href="#/" className="flex min-w-0 max-w-[220px] flex-col leading-none lg:min-w-[220px] lg:max-w-none" aria-label="xemX home">
          <img src="/xemx-logo.svg" alt="" className="h-auto w-[82px]" aria-hidden="true" />
          <span className="mt-1 truncate text-[0.68rem] font-medium uppercase leading-tight tracking-[0.14em] text-[#c3c3fa] lg:overflow-visible lg:whitespace-nowrap">
            materials space exploration
          </span>
        </a>

        <nav className="hidden items-center gap-3 text-sm font-medium text-[#c3c3fa] xl:gap-5 lg:flex">
          {navItems.map(([label, href]) => {
            const itemRoute = href.replace(/^#\/?/, "") || "home"
            const active = route === itemRoute || (route === "home" && itemRoute === "home")

            return (
              <a
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-2.5 py-1.5 transition hover:text-[#f7f8ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
                  active && "bg-white/10 text-[#f7f8ff] shadow-sm",
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
            className="inline-flex whitespace-nowrap rounded-full bg-[#9dc3fa] px-5 py-2.5 text-sm font-semibold text-[#000030] shadow-sm transition hover:bg-[#c3c3fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Discuss a campaign
          </a>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#9dc3fa]/35 bg-[#000030] text-[#f7f8ff] lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-[#9dc3fa]/25 bg-[#000030] px-6 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-[1200px] gap-1 text-sm font-medium text-[#c3c3fa]">
            {navItems.map(([label, href]) => {
              const itemRoute = href.replace(/^#\/?/, "") || "home"
              const active = route === itemRoute || (route === "home" && itemRoute === "home")

              return (
                <a
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-3 py-3 hover:bg-white/10 hover:text-[#f7f8ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
                    active && "bg-white/10 text-[#f7f8ff]",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              )
            })}
            <a
              href="#/contact"
              className="mt-3 rounded-full bg-[#9dc3fa] px-5 py-3 text-center font-semibold text-[#000030]"
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
