import { useEffect, useState } from "react";
import {
  User,
  Layers,
  FolderGit2,
  Briefcase,
  Code2,
  Award,
  Mail,
  Menu,
  X,
  Zap,
} from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

const links = [
  { id: "about",      label: "About",      Icon: User },
  { id: "skills",     label: "Skills",     Icon: Layers },
  { id: "projects",   label: "Projects",   Icon: FolderGit2 },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "coding",     label: "Coding",     Icon: Code2 },
  { id: "certs",      label: "Certs",      Icon: Award },
  { id: "contact",    label: "Contact",    Icon: Mail },
];

export function Nav() {
  const [scrolled, setScrolled]       = useState(false);
  const [active, setActive]           = useState("");
  const [mobileOpen, setMobileOpen]   = useState(false);

  /* ── scroll / active-section tracking ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      let current = "";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── close mobile menu on link click ── */
  const handleNav = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "nav-scrolled"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

          {/* ── LOGO ── */}
          <a href="#top" className="nav-logo group" aria-label="Home">
            <span className="nav-logo-icon">
              <Zap className="h-4 w-4" />
            </span>
            <span className="nav-logo-text">
              <span className="nav-logo-path">~/</span>
              <span className="nav-logo-name">gaurav<span className="nav-logo-dot">.</span>dev</span>
            </span>
            <span className="nav-logo-cursor" />
          </a>

          {/* ── DESKTOP NAV ── */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ id, label, Icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={e => { e.preventDefault(); handleNav(id); }}
                  className={`nav-link ${active === id ? "nav-link-active" : ""}`}
                  aria-current={active === id ? "page" : undefined}
                >
                  <Icon className="h-3.5 w-3.5 nav-link-icon" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* ── CTA & THEME TOGGLE ── */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="nav-cta"
              onClick={e => { e.preventDefault(); handleNav("contact"); }}
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <button
            className="md:hidden nav-hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <div className={`mobile-drawer ${mobileOpen ? "mobile-drawer-open" : ""}`}>
        <div className="mobile-drawer-inner">
          <ul className="flex flex-col gap-2 mt-4">
            {links.map(({ id, label, Icon }, i) => (
              <li key={id} style={{ animationDelay: `${i * 60}ms` }}
                  className={mobileOpen ? "mobile-link-slide" : ""}>
                <a
                  href={`#${id}`}
                  onClick={e => { e.preventDefault(); handleNav(id); }}
                  className={`mobile-nav-link ${active === id ? "mobile-nav-link-active" : ""}`}
                >
                  <span className="mobile-nav-icon-wrap">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>{label}</span>
                  {active === id && <span className="mobile-active-dot" />}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex justify-between items-center px-2">
              <span className="text-sm font-mono text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
            <a
              href="#contact"
              className="nav-cta w-full justify-center"
              onClick={e => { e.preventDefault(); handleNav("contact"); }}
            >
              <Mail className="h-4 w-4" />
              <span>Let's Talk</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}