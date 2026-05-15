import { Section, SectionHeader } from "./Section";
import { GitCommit } from "lucide-react";

const items = [
  {
    role: "Trainee",
    org: "GLA University",
    when: "June 2025 – July 2025",
    bullets: [
      "Implemented Python-based machine learning techniques on real-world datasets using Pandas & NumPy.",
      "Achieved 82% model accuracy and reduced data processing time by 30%.",
      "Constructed an ML model that achieved 82% accuracy in predicting student dropout risks.",
    ],
    tags: ["Python", "Machine Learning", "Pandas", "NumPy"],
  }
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader index="04." title="Experience" subtitle="git log --oneline" />
      <div className="relative pl-6 sm:pl-10 border-l border-border space-y-6">
        {items.map((it, idx) => (
          <div key={idx} className="relative">
            <span className="absolute -left-[31px] sm:-left-[43px] top-1 grid place-items-center h-6 w-6 rounded-full border border-neon bg-background text-neon shadow-[0_0_18px_var(--color-neon)]">
              <GitCommit className="h-3.5 w-3.5" />
            </span>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur p-6 hover:border-neon transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {it.role}{" "}
                  <span className="text-neon">@ {it.org}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{it.when}</span>
              </div>
              <ul className="mt-4 space-y-2 text-[15px] text-muted-foreground leading-relaxed">
                {it.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-neon mt-1">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2 font-mono text-[11px]">
                {it.tags.map((t) => (
                  <li key={t} className="px-2 py-1 rounded border border-border bg-surface text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}