import type { ReactNode } from "react";

export function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="flex items-center gap-4 mb-2">
        <span className="font-mono text-neon text-sm">{index}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        {title}
        <span className="text-neon">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground font-mono text-sm">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-neon to-transparent" />
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-12 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}