import { Section, SectionHeader } from "./Section";
import { Award } from "lucide-react";

const certs = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    image: "/cisco.png"
  },
  {
    title: "Python Essentials",
    issuer: "Python Institute / Cisco",
    year: "2024",
    image: "/python certificate.png"
  },
  {
    title: "MongoDB Associate Developer",
    issuer: "MongoDB University",
    year: "2024",
    image: "/mongo.jpg"
  },
];

export function Certifications() {
  return (
    <Section id="certs">
      <SectionHeader index="06." title="Certifications" subtitle="cat ./achievements" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c) => (
          <div
            key={c.title}
            className="group relative rounded-xl border border-border bg-gradient-to-br from-card/80 to-surface/40 backdrop-blur p-6 hover:border-neon hover:shadow-[0_0_40px_-10px_var(--color-neon)] transition-all overflow-hidden"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="h-10 w-10 rounded-lg border border-neon/40 bg-neon/10 grid place-items-center text-neon group-hover:bg-neon group-hover:text-primary-foreground transition-colors">
                <Award className="h-5 w-5" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">{c.year}</span>
            </div>
            
            {c.image && (
              <div className="mb-4 rounded-lg overflow-hidden border border-border bg-muted/30 aspect-[4/3] relative group-hover:border-neon/50 transition-colors">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            <h3 className="font-semibold leading-snug">{c.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}