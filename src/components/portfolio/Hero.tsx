import { useEffect, useState } from "react";
import { Code2, Globe, FileDown, ArrowDown } from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "Software Engineer",
  "Competitive Programmer",
  "Problem Solver",
];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 w-full"
    >
      {/* ── Premium Animated Aurora Background ── */}
      <div className="absolute inset-0 bg-background/50 z-0" />
      <div className="absolute inset-0 grid-bg opacity-[0.15] z-0" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top Left Neon Blob */}
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-neon/15 blur-[120px] dark:mix-blend-screen mix-blend-multiply" style={{ animationDuration: '8s' }} />
        {/* Center Right Accent Blob */}
        <div className="absolute top-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/15 blur-[100px] dark:mix-blend-screen mix-blend-multiply" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        {/* Bottom Center Primary Blob */}
        <div className="absolute -bottom-[20%] left-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/10 blur-[130px] dark:mix-blend-screen mix-blend-multiply" style={{ animationDuration: '10s', animationDelay: '4s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-7 fade-up min-w-0 w-full">
          <p className="font-mono text-sm text-neon mb-6 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-neon shadow-[0_0_12px_var(--color-neon)]" />
            hello_world.init()
          </p>
          <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Gaurav <span className="text-neon text-glow">Mittal</span>.
          </h1>
          <p className="mt-3 text-xl sm:text-3xl text-muted-foreground font-medium">
            Computer Science Engineer.
          </p>
          <div className="mt-8 font-mono text-lg sm:text-xl">
            <span className="text-muted-foreground">{"> "}</span>
            <span className="text-foreground">{text}</span>
            <span className="text-neon animate-pulse">|</span>
          </div>
          <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
            Building scalable and intelligent systems with modern web tech. I craft
            clean APIs, performant frontends, and the bridges between them.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-full">
            <a
              href="#projects"
              className="group relative flex sm:inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 rounded-md bg-neon text-primary-foreground font-mono text-sm font-semibold shadow-[0_4px_14px_0_var(--color-neon-soft)] hover:shadow-[0_6px_20px_0_var(--color-neon-soft)] hover:-translate-y-0.5 transition-all"
            >
              view_projects()
            </a>
            <a
              href="/resume.pdf"
              download="Gaurav_Mittal_Resume.pdf"
              className="flex sm:inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 rounded-md border border-border bg-card/50 backdrop-blur font-mono text-sm hover:border-neon hover:text-neon transition-colors"
            >
              <FileDown className="h-4 w-4" /> resume.pdf
            </a>
            <div className="flex items-center gap-3 justify-center sm:justify-start mt-2 sm:mt-0">
              <a
                href="https://github.com/Gauravmittal9205"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="h-12 w-12 grid place-items-center rounded-md border border-border bg-card/30 hover:border-neon hover:text-neon transition-colors"
              >
                <Code2 className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-mittal-1407a22b9/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-12 w-12 grid place-items-center rounded-md border border-border bg-card/30 hover:border-neon hover:text-neon transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 fade-up min-w-0 w-full">
          <div className="float relative rounded-xl border border-border bg-card/60 backdrop-blur overflow-hidden border-glow">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface/80">
              <span className="h-3 w-3 rounded-full bg-destructive/80" />
              <span className="h-3 w-3 rounded-full bg-chart-4" />
              <span className="h-3 w-3 rounded-full bg-neon" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                ~/gaurav/profile.ts
              </span>
            </div>
            <pre className="p-5 font-mono text-[13px] leading-relaxed text-muted-foreground overflow-x-auto">
{`const dev = {
  name: 'Gaurav Mittal',
  role: 'CS Engineer',
  stack: [`}
              <span className="text-neon">{"'Java'"}</span>{`, `}
              <span className="text-neon">{"'JavaScript'"}</span>{`,
          `}<span className="text-neon">{"'Python'"}</span>{`, `}
              <span className="text-neon">{"'React'"}</span>{`, `}
              <span className="text-neon">{"'Node.js'"}</span>{`],
  focus: `}<span className="text-accent">{"'full-stack dev'"}</span>{`,
  open_to_work: `}<span className="text-chart-4">true</span>{`,
  build: () => `}<span className="text-accent">{"'cool things 🚀'"}</span>{`,
};`}
            </pre>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-neon"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}