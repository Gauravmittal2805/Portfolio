export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <p>
          <span className="text-neon">$</span> echo "Designed &amp; engineered by{" "}
          <span className="text-foreground">Gaurav Mittal</span>"
        </p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_10px_var(--color-neon)] animate-pulse" />
            available for opportunities
          </span>
          <span>built with React + TS</span>
          <span>v2026.05</span>
        </div>
      </div>
    </footer>
  );
}