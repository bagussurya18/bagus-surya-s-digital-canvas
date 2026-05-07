import { Trophy, Medal, Award, Users, BookOpen, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: Trophy, title: "Juara 1 Lomba Web Design", year: "2024", desc: "Tingkat sekolah, kategori UI Modern." },
  { icon: Medal, title: "Top 3 Speech Contest", year: "2024", desc: "Lomba pidato Bahasa Inggris antar kelas." },
  { icon: Award, title: "Best Student of Diniyah", year: "2023", desc: "Penghargaan akademik HSI Boarding." },
  { icon: Users, title: "Ketua OSIS / Organisasi", year: "2024–2025", desc: "Memimpin program kerja & event sekolah." },
  { icon: BookOpen, title: "Sertifikat Mutun", year: "2024", desc: "Menyelesaikan beberapa kitab dasar." },
  { icon: Star, title: "Peringkat Kelas", year: "2023–2025", desc: "Konsisten masuk 5 besar setiap semester." },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto px-4 relative">
        <SectionHeader
          eyebrow="Achievements"
          title="Pencapaian"
          description="Sertifikat, penghargaan, dan pengalaman yang membentuk perjalanan saya."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all relative overflow-hidden group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -top-10 -right-10 size-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="size-12 rounded-xl bg-mint-gradient grid place-items-center shadow-glow">
                    <it.icon className="size-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-mono text-primary">{it.year}</span>
                </div>
                <h3 className="font-bold mb-1">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
