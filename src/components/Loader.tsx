import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background animate-fade-up">
      <div className="text-center">
        <div className="relative size-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" />
          <div className="absolute inset-3 rounded-full bg-mint-gradient shadow-glow grid place-items-center font-display font-bold text-primary-foreground">BS</div>
        </div>
        <div className="font-display text-sm tracking-widest text-muted-foreground uppercase">Loading Portfolio</div>
      </div>
    </div>
  );
}
