import { SectionHeader } from "./SectionHeader";

const milestones = [
  { year: "2020", title: "Mengenal Dunia Coding", desc: "Mulai belajar HTML & CSS secara otodidak dari YouTube." },
  { year: "2022", title: "Masuk SMA IT HSI Boarding", desc: "Memulai perjalanan akademik & ilmu syar'i di pesantren." },
  { year: "2023", title: "Project IT Pertama", desc: "Membuat website absensi sekolah untuk kegiatan kelas." },
  { year: "2024", title: "Aktif Public Speaking", desc: "Menjadi MC dan pembicara dalam berbagai event sekolah." },
  { year: "2025", title: "Fokus Full-Stack & Tahfidz", desc: "Belajar React, Node.js sambil menargetkan hafalan baru." },
  { year: "2026", title: "Membangun Portfolio Pro", desc: "Meluncurkan portfolio personal dan freelance project." },
];

export function Journey() {
  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="My Journey" title="Perjalanan Saya" description="Setiap langkah, sekecil apa pun, membentuk siapa saya hari ini." />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`reveal relative grid md:grid-cols-2 gap-4 md:gap-8 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                  <div className="glass rounded-2xl p-5 hover:shadow-glow transition-all inline-block">
                    <div className="text-xs font-mono text-primary mb-1">{m.year}</div>
                    <h3 className="font-bold text-lg mb-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2">
                  <div className="size-4 rounded-full bg-mint-gradient shadow-glow ring-4 ring-background" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
