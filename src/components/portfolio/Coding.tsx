import { Section, SectionHeader } from "./Section";
import { Code, Trophy, Flame, GitBranch } from "lucide-react";

const profiles = [
  { 
    name: "LeetCode", 
    icon: Code, 
    value: "700+", 
    label: "Problems Solved",
    url: "https://leetcode.com/u/gauravmittal9205/",
    color: "text-orange-500"
  },
  { 
    name: "Codeforces", 
    icon: Trophy, 
    value: "1000+", 
    label: "Max Rating: 1547 (Specialist)",
    url: "https://codeforces.com/profile/gauravmittal9205",
    color: "text-blue-500"
  },
  { 
    name: "HackerRank", 
    icon: Flame, 
    value: "5 Stars", 
    label: "Problem Solving (Basic/Inter)",
    url: "https://www.hackerrank.com/profile/gauravmittal9205",
    color: "text-green-500"
  },
  { 
    name: "CodeChef", 
    icon: GitBranch, 
    value: "1600+", 
    label: "3 Star Coder",
    url: "https://www.codechef.com/users/gauravmittal92",
    color: "text-amber-700"
  },
];

export function Coding() {
  return (
    <Section id="coding">
      <SectionHeader index="05." title="Coding profiles" subtitle="./run --dsa" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {profiles.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-border bg-card/50 backdrop-blur p-6 hover:border-neon hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <p.icon className={`h-5 w-5 ${p.color || 'text-neon'}`} />
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {p.name}
              </span>
            </div>
            <p className="text-3xl font-bold text-glow group-hover:text-neon transition-colors">
              {p.value}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{p.label}</p>
            
            <div className="mt-4 flex items-center text-[11px] font-mono text-neon">
              view_profile() <Code className="ml-1 h-3 w-3" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}