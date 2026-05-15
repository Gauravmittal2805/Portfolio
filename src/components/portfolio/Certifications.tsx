import { Section, SectionHeader } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2024" },
  { title: "Solved 650+ coding problems", issuer: "LeetCode", year: "Present" },
  { title: "1000+ Rating", issuer: "Codeforces", year: "Present" },
  { title: "Solution Challenge Contributor", issuer: "Google Developer Groups", year: "2024" },
  { title: "Hackathon Participant", issuer: "Smart India Hackathon", year: "2025" },
  { title: "Devathon Participant", issuer: "Inter-College Hackathon", year: "2025" },
];

export function Certifications() {
  return (
    <Section id="certs">
      <SectionHeader index="06." title="Certifications" subtitle="cat ./achievements" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c) => (
          <div
            key={c.title}
            className="group relative rounded-xl border border-border bg-gradient-to-br from-card/80 to-surface/40 backdrop-blur p-6 hover:border-neon hover:shadow-[0_0_40px_-10px_var(--color-neon)] transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="h-10 w-10 rounded-lg border border-neon/40 bg-neon/10 grid place-items-center text-neon group-hover:bg-neon group-hover:text-primary-foreground transition-colors">
                <Award className="h-5 w-5" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">{c.year}</span>
            </div>
            <h3 className="mt-4 font-semibold leading-snug">{c.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}