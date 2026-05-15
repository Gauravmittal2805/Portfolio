import { Section, SectionHeader } from "./Section";
import { Brain, Code2, Database, Sparkles, Target, Zap, ShieldAlert, Users } from "lucide-react";

const facts = [
  { icon: Code2, label: "Programming", value: "Java • JS • Python" },
  { icon: Database, label: "Web Tech", value: "MERN Stack" },
  { icon: Brain, label: "Problem Solving", value: "700+ LeetCode" },
  { icon: Sparkles, label: "Competitive", value: "1000+ Codeforces" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader index="01." title="About me" subtitle="whoami" />
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-[15px]">
          <p>
            I'm a <span className="text-foreground font-semibold">Computer Science Engineer</span>{" "}
            who loves turning hard problems into clean, fast software. My playground
            spans backend services in <span className="text-neon">Java &amp; Spring Boot</span>,
            modern React frontends, and the system-design glue that holds them together.
          </p>
          <p>
            I write code that is intentional — readable, testable, and built to grow.
            Whether it's an API serving thousands of users, a UI animation timed
            to the millisecond, or a side project exploring AI, I obsess over the craft.
          </p>
          <p>
            Currently looking for opportunities where I can ship meaningful products
            and learn from engineers who are sharper than me.
          </p>

          <div className="pt-4">

            <ol className="relative border-l border-border pl-6 space-y-5">
              <TimelineItem year="2027" text="B.Tech in Computer Science, GLA University (CPI: 8.77)" />
              <TimelineItem year="2025" text="Machine Learning Trainee at GLA University" />
              <TimelineItem year="2023" text="Intermediate (88.6%), Ramanlal Shorawala Public School" />
              <TimelineItem year="2021" text="High School (85%), Ramanlal Shorawala Public School" />
            </ol>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-lg border border-border bg-card/50 backdrop-blur p-4 hover:border-neon hover:-translate-y-0.5 transition-all"
            >
              <f.icon className="h-5 w-5 text-neon mb-3" />
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {f.label}
              </p>
              <p className="text-sm font-semibold mt-1">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="mt-12 grid sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
            <Target className="h-5 w-5 text-neon" /> Strengths
          </h3>
          <div className="grid gap-3">
            <AttributeItem 
              icon={Zap} 
              title="Analytical Thinking" 
              desc="Deep problem-solving skills with 700+ LeetCode problems solved." 
            />
            <AttributeItem 
              icon={Users} 
              title="Team Leadership" 
              desc="Proven ability to lead teams in hackathons and deliver results under pressure." 
            />
            <AttributeItem 
              icon={Sparkles} 
              title="Fast Learner" 
              desc="Quickly adapting to new technologies and scaling project complexity." 
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
            <ShieldAlert className="h-5 w-5 text-accent" /> Areas for Growth
          </h3>
          <div className="grid gap-3">
            <AttributeItem 
              icon={ShieldAlert} 
              title="Over-Perfectionism" 
              desc="Occasionally spending extra time on minor UI/UX details for the perfect feel." 
              isWeakness
            />
            <AttributeItem 
              icon={Users} 
              title="Task Delegation" 
              desc="Naturally tend to take on much, but actively learning to trust team delegation." 
              isWeakness
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function TimelineItem({ year, text }: { year: string; text: string }) {
  return (
    <li className="relative">
      <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_12px_var(--color-neon)]" />
      <p className="font-mono text-xs text-neon">{year}</p>
      <p className="text-sm text-foreground/90 mt-0.5">{text}</p>
    </li>
  );
}

function AttributeItem({ 
  icon: Icon, 
  title, 
  desc, 
  isWeakness 
}: { 
  icon: any; 
  title: string; 
  desc: string; 
  isWeakness?: boolean 
}) {
  return (
    <div className={`p-4 rounded-lg border border-border bg-card/30 backdrop-blur hover:border-${isWeakness ? 'accent' : 'neon'} transition-all`}>
      <div className="flex items-center gap-3 mb-2">
        <Icon className={`h-4 w-4 ${isWeakness ? 'text-accent' : 'text-neon'}`} />
        <h4 className="font-semibold text-sm">{title}</h4>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </div>
  );
}