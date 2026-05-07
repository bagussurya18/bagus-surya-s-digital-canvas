import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Project IT" },
  { href: "#english", label: "English" },
  { href: "#hsi", label: "HSI" },
  { href: "#journey", label: "Journey" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all ${
            scrolled ? "glass shadow-card" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="size-9 rounded-xl bg-mint-gradient grid place-items-center shadow-glow">
                <Sparkles className="size-4 text-primary-foreground" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-sm md:text-base">Bagus Surya</div>
              <div className="text-[10px] md:text-xs text-muted-foreground">Portfolio</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-mint-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="size-9 grid place-items-center rounded-xl glass hover:shadow-glow transition-all"
            >
              {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-xl bg-mint-gradient text-primary-foreground text-sm font-semibold hover:shadow-glow transition-all"
            >
              Hire Me
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="lg:hidden size-9 grid place-items-center rounded-xl glass"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 animate-fade-up">
            <div className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm hover:bg-accent transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
