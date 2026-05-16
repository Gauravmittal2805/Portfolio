import { useEffect, useRef, useState } from "react";
import { Section, SectionHeader } from "./Section";
import { Mail, Code2, Globe, Phone, MapPin } from "lucide-react";

type Line = { type: "in" | "out"; text: string };

const HELP = [
  "available commands:",
  "  help          show this help",
  "  whoami        about me",
  "  socials       list my socials",
  "  email         get my email",
  "  resume        download resume",
  "  clear         clear the terminal",
  "  connect       send a quick message",
];

export function Contact() {
  const [lines, setLines] = useState<Line[]>([
    { type: "out", text: "Welcome to gaurav.sh — type `help` to begin." },
  ]);
  const [value, setValue] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  function run(cmd: string) {
    const out: string[] = [];
    const c = cmd.trim().toLowerCase();
    if (!c) return;
    if (c === "help") out.push(...HELP);
    else if (c === "whoami") out.push("gaurav mittal — cs engineer, full stack dev, competitive programmer.");
    else if (c === "socials") out.push("github.com/Gauravmittal9205", "linkedin.com/in/gaurav-mittal-1407a22b9");
    else if (c === "email") out.push("gauravmittal939@gmail.com");
    else if (c === "resume") out.push("downloading resume.pdf …");
    else if (c === "clear") { setLines([]); return; }
    else if (c.startsWith("connect")) out.push("opening secure tunnel… mail client launched ✓");
    else out.push(`command not found: ${c} — try \`help\``);
    setLines((l) => [...l, { type: "in", text: cmd }, ...out.map((t) => ({ type: "out" as const, text: t }))]);
  }

  return (
    <Section id="contact">
      <SectionHeader index="08." title="Get in touch" subtitle="./connect --user gaurav" />
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <div className="rounded-xl border border-border bg-card/70 backdrop-blur overflow-hidden border-glow">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface/80">
              <span className="h-3 w-3 rounded-full bg-destructive/80" />
              <span className="h-3 w-3 rounded-full bg-chart-4" />
              <span className="h-3 w-3 rounded-full bg-neon" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                gaurav@portfolio:~$
              </span>
            </div>
            <div className="p-5 font-mono text-[13px] h-80 overflow-y-auto">
              {lines.map((l, i) => (
                <div key={i} className={l.type === "in" ? "text-foreground" : "text-muted-foreground"}>
                  {l.type === "in" && <span className="text-neon">$ </span>}
                  {l.text}
                </div>
              ))}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  run(value);
                  setValue("");
                }}
                className="flex items-center gap-2 mt-1"
              >
                <span className="text-neon">$</span>
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground/50"
                  placeholder="type a command…"
                  spellCheck={false}
                />
              </form>
              <div ref={endRef} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-3">
          <p className="text-muted-foreground leading-relaxed">
            I'm based in Mathura. Always open to interesting roles, side projects, and good
            conversations about systems, AI, or tech.
          </p>
          <ContactLink href="mailto:gauravmittal939@gmail.com" icon={Mail} label="gauravmittal939@gmail.com" />
          <ContactLink href="tel:+919411229831" icon={Phone} label="+91 9411229831" />
          <div className="flex items-start gap-3 rounded-lg border border-border bg-card/50 backdrop-blur px-4 py-3 font-mono text-sm">
            <MapPin className="h-4 w-4 text-neon mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">RK Puram, Sonkh Road, Mathura, UP, India 281004</span>
          </div>
          <ContactLink href="https://github.com/Gauravmittal9205" icon={Code2} label="github.com/Gauravmittal9205" />
          <ContactLink href="https://www.linkedin.com/in/gaurav-mittal-1407a22b9/" icon={Globe} label="linkedin.com/in/gaurav-mittal" />
        </div>
      </div>
    </Section>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-lg border border-border bg-card/50 backdrop-blur px-4 py-3 hover:border-neon hover:text-neon transition-colors font-mono text-sm"
    >
      <Icon className="h-4 w-4 text-neon" />
      {label}
    </a>
  );
}