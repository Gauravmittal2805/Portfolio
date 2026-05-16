import { Section, SectionHeader } from "./Section";
import { Trophy, Users, Calendar, Award } from "lucide-react";

const hackathons = [
  {
    title: "Smart India Hackathon (SIH)",
    role: "Participant",
    org: "Ministry of Education",
    when: "2025",
    description: "Participated in the world's largest open innovation model. Focused on solving real-world problems through collaborative engineering.",
    image: "/SIH.jpg",
    tags: ["Innovation", "Problem Solving", "Teamwork"]
  },
  {
    title: "Deviathon",
    role: "Participant",
    org: "Inter-College Hackathon",
    when: "2025",
    description: "Collaborated in a high-intensity environment to build functional prototypes. Gained hands-on experience in rapid application development.",
    image: "/deviathon.png",
    tags: ["Prototyping", "Rapid Dev", "Collaboration"]
  },
  {
    title: "Hack2skill",
    role: "Participant",
    org: "Hackathon Community",
    when: "2024",
    description: "Successfully built and presented a technical solution within a limited timeframe, focusing on scalability and user experience.",
    image: "/Hack2skill-Certificate (1).png",
    tags: ["Scale", "UI/UX", "Presentation"]
  }
];

const gallery = [
  "/hack1.jpg",
  "/hack2.jpg",
  "/hack3.jpg",
  "/hack4.jpg",
  "/hack5.jpg",
  "/hack6.jpg",
];

export function Hackathons() {
  return (
    <Section id="hackathons">
      <SectionHeader index="07." title="Hackathons" subtitle="grep -r 'victory' ./history" />
      
      {/* ── Main Experience ── */}
      <div className="grid gap-8 mb-20">
        {hackathons.map((h, i) => (
          <div 
            key={i}
            className="group relative rounded-2xl border border-border bg-card/40 backdrop-blur overflow-hidden hover:border-neon transition-all duration-500"
          >
            <div className="grid md:grid-cols-12 gap-6 p-6 sm:p-8">
              {/* Image / Certificate */}
              <div className="md:col-span-5 lg:col-span-4 rounded-xl overflow-hidden border border-border bg-muted/20 aspect-[4/3] md:aspect-auto h-full max-h-[300px]">
                <img 
                  src={h.image} 
                  alt={h.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-neon transition-colors">
                      {h.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground font-mono">
                      <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {h.org}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {h.when}</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full border border-neon/30 bg-neon/5 text-neon text-xs font-mono">
                    {h.role}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {h.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {h.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded border border-border bg-surface/50 text-[11px] font-mono text-muted-foreground">
                      #{t.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Corner Icon */}
            <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-background/50 border border-border grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Trophy className="h-4 w-4 text-neon" />
            </div>
          </div>
        ))}
      </div>

      {/* ── Gallery ── */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-bold font-mono tracking-tight flex items-center gap-2">
            <span className="text-neon">$</span> ls ./gallery/hackathons
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {gallery.map((img, i) => (
            <div 
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden border border-border bg-card hover:border-neon group transition-all"
            >
              <img 
                src={img} 
                alt={`Hackathon moment ${i + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
