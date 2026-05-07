import { SectionHeader } from "./SectionHeader";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", value: 95, cat: "Code" },
  { name: "CSS", value: 92, cat: "Code" },
  { name: "JavaScript", value: 85, cat: "Code" },
  { name: "Python", value: 78, cat: "Code" },
  { name: "UI/UX Design", value: 80, cat: "Design" },
  { name: "Public Speaking", value: 88, cat: "Soft" },
  { name: "English Speaking", value: 82, cat: "Lang" },
  { name: "Leadership", value: 85, cat: "Soft" },
  { name: "Microsoft Office", value: 90, cat: "Tools" },
  { name: "Editing Video", value: 75, cat: "Creative" },
  { name: "Desain Canva", value: 92, cat: "Creative" },
  { name: "Git & GitHub", value: 80, cat: "Code" },
];

const catColors: Record<string, string> = {
  Code: "from-primary to-mint-glow",
  Design: "from-mint-glow to-primary",
  Soft: "from-emerald-deep to-primary",
  Lang: "from-primary to-emerald-deep",
  Tools: "from-mint-glow to-emerald-deep",
  Creative: "from-emerald-deep to-mint-glow",
};

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto px-4 relative">
        <SectionHeader
          eyebrow="Skill & Kemampuan"
          title="What I Can Do"
          description="Kombinasi technical skill, kemampuan bahasa, dan soft skill yang terus saya asah setiap hari."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          {skills.map((s, i) => (
            <div key={s.name} className="reveal" style={{ transitionDelay: `${i * 40}ms` }}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{s.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full glass text-muted-foreground uppercase tracking-wider">
                    {s.cat}
                  </span>
                </div>
                <span className="font-mono text-sm text-primary">{s.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${catColors[s.cat]} transition-all duration-1500 ease-out shadow-glow`}
                  style={{ width: show ? `${s.value}%` : "0%", transitionDelay: `${i * 80}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
