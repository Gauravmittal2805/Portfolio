import { Section, SectionHeader } from "./Section";

const groups = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Web Development",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Redux", "JWT Auth", "HTML/CSS"],
  },
  {
    title: "Core Concepts",
    items: ["Data Structures", "Algorithms", "Problem Solving", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Linux", "Vercel", "Vite"],
  },
  {
    title: "Professional Skills",
    items: ["Effective Communication", "Team Work", "Problem Solving", "Interpersonal Skills"],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader index="02." title="Skills & stack" subtitle="ls ./toolbox" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div
            key={g.title}
            className="group relative rounded-xl border border-border bg-card/50 backdrop-blur p-6 hover:border-neon transition-colors"
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,50%), color-mix(in oklab, var(--color-neon) 12%, transparent), transparent 60%)" }}
            />
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{g.title}</h3>
              <span className="font-mono text-[10px] text-muted-foreground">
                {String(g.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="font-mono text-xs px-2.5 py-1 rounded border border-border bg-surface/60 text-foreground/80 hover:border-neon hover:text-neon transition-colors"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}