import { Section, SectionHeader } from "./Section";
import { ExternalLink, Code2, Folder } from "lucide-react";

type Project = {
  title: string;
  description: string;
  features: string[];
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  image?: string;
};

const projects: Project[] = [
  {
    title: "CodePrep — Interview Platform",
    description:
      "Full-stack platform supporting DSA practice, mock OAs, live contests, and AI-driven interview simulations. Engineered real-time workflows with live leaderboards and instant code evaluation.",
    features: ["Live contests", "Code evaluation", "AI interviews", "Leaderboards"],
    stack: ["React.js", "Node.js", "MongoDB", "GroqAI"],
    github: "https://github.com/Gauravmittal9205/CodePrep",
    featured: true,
    image: "/codeprep.png",
  },
  {
    title: "ShareCare — Resource Donation",
    description:
      "Donation platform connecting verified NGOs and donors. Features OTP authentication, admin dashboard for request validation, and transparent tracking for resources.",
    features: ["OTP Auth", "Admin Dashboard", "Donation Tracking"],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Gauravmittal9205/Multi_Resource_Donation",
    featured: true,
    image: "/share_care.png",
  },
  {
    title: "EduTrack_AI — Syllabus Tracking",
    description:
      "AI-powered syllabus tracking platform to help students monitor progress. Integrated OCR for syllabus digitization and Gemini Pro API for AI-based doubt solving and quiz generation.",
    features: ["OCR Digitization", "AI Tutoring", "Quiz Generation"],
    stack: ["React", "Node.js", "MongoDB", "Gemini API"],
    github: "https://github.com/Gauravmittal9205/EduTrack_AI",
    featured: true,
    image: "/EduTrack.png",
  },
  {
    title: "FoodMart — E-commerce Site",
    description: "A grocery e-commerce site with product browsing, cart functionality, and seamless management.",
    features: ["Product Browsing", "Cart Management", "Intuitive UI"],
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Gauravmittal9205/FoodMart-Grocery-Site",
    featured: false
  },
  {
    title: "BMI Calculator",
    description: "A tool to calculate Body Mass Index instantly based on user weight and height input.",
    features: ["Instant Calculation", "Responsive Design"],
    stack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Gauravmittal9205",
    featured: false
  },
  {
    title: "Modern Developer Portfolio",
    description: "A premium, dark-themed portfolio featuring glassmorphism, smooth animations, and a terminal-inspired design.",
    features: ["Responsive Design", "Lucide Icons", "Tailwind CSS"],
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/Gauravmittal9205/Portfolio",
    featured: false
  }
];

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <Section id="projects">
      <SectionHeader index="03." title="Selected projects" subtitle="cat ./projects" />

      <div className="space-y-12">
        {featured.map((p, i) => (
          <FeaturedCard key={p.title} p={p} reverse={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-20">
        <div className="mb-10">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="h-px w-8 bg-neon" /> Basic Projects
          </h3>
          <p className="text-sm text-muted-foreground mt-2 ml-10">
            Smaller tools and foundational projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((p) => (
            <SmallCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function FeaturedCard({ p, reverse }: { p: Project; reverse?: boolean }) {
  return (
    <div className={`grid lg:grid-cols-12 gap-6 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
      <div className="lg:col-span-7 [direction:ltr]">
        <div className="relative rounded-xl border border-border bg-card/60 backdrop-blur overflow-hidden border-glow">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface/80">
            <span className="h-3 w-3 rounded-full bg-destructive/80" />
            <span className="h-3 w-3 rounded-full bg-chart-4" />
            <span className="h-3 w-3 rounded-full bg-neon" />
            <span className="ml-3 font-mono text-xs text-muted-foreground truncate">
              ~/projects/{p.title.toLowerCase().split(" ")[0]}/main.ts
            </span>
          </div>
          <div className={`aspect-[16/10] relative overflow-hidden group ${!p.image ? 'grid-bg' : 'bg-[#0a0a0a]'}`}>
            {p.image ? (
              <img 
                src={p.image} 
                alt={p.title} 
                className="absolute inset-0 w-full h-full object-contain p-2 transition-all duration-500 group-hover:scale-[1.02]" 
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center px-6">
                  <p className="font-mono text-xs text-neon mb-2">{p.stack[0]}</p>
                  <p className="text-2xl font-bold">{p.title.split(" — ")[0]}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {p.title.split(" — ")[1]}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="lg:col-span-5 [direction:ltr]">

        <h3 className="text-2xl font-bold mt-2">{p.title}</h3>
        <div className="mt-4 rounded-lg border border-border bg-card/70 backdrop-blur p-5 text-[15px] leading-relaxed text-muted-foreground">
          {p.description}
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-xs">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-foreground/80">
                <span className="text-neon">▸</span> {f}
              </li>
            ))}
          </ul>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-muted-foreground">
          {p.stack.map((s) => (
            <li key={s} className="px-2 py-1 rounded bg-surface border border-border">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center gap-3">
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-neon">
              <Code2 className="h-5 w-5" />
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live demo" className="hover:text-neon">
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SmallCard({ p }: { p: Project }) {
  return (
    <div className="group rounded-xl border border-border bg-card/50 backdrop-blur p-6 hover:border-neon hover:-translate-y-1 transition-all">
      <div className="flex items-center justify-between mb-5">
        <Folder className="h-7 w-7 text-neon" />
        <div className="flex items-center gap-3 text-muted-foreground">
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-neon">
              <Code2 className="h-4 w-4" />
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live demo" className="hover:text-neon">
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      <h4 className="font-semibold group-hover:text-neon transition-colors">{p.title}</h4>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.description}</p>
      <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-muted-foreground">
        {p.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}