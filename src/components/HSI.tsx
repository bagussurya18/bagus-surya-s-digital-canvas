import { BookMarked, Scroll, Sparkles, Star, Calendar, Camera } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import hsiBg from "@/assets/hsi-bg.jpg";

const subjects = [
  { name: "Aqidah", level: "Mumtaz" },
  { name: "Fikih", level: "Jayyid Jiddan" },
  { name: "Hadits", level: "Mumtaz" },
  { name: "Mutun", level: "Jayyid Jiddan" },
  { name: "Bahasa Arab", level: "Jayyid" },
  { name: "IT", level: "Mumtaz" },
];

const cards = [
  { icon: Star, title: "Prestasi Akademik", desc: "Peringkat 5 besar di kelas Tahfidz dan Diniyah." },
  { icon: Scroll, title: "Sertifikat", desc: "Sertifikat menyelesaikan Mutun & program akademik HSI." },
  { icon: BookMarked, title: "Hafalan", desc: "Sedang menargetkan 5 juz Al-Qur'an & beberapa Mutun." },
  { icon: Calendar, title: "Jadwal Belajar", desc: "Senin–Sabtu: Diniyah pagi, Akademik siang, Tahfidz malam." },
  { icon: Camera, title: "Dokumentasi", desc: "Aktif mendokumentasikan kegiatan halaqah & kajian." },
  { icon: Sparkles, title: "Visi", desc: "Menjadi penuntut ilmu yang istiqamah dan bermanfaat." },
];

export function HSI() {
  return (
    <section id="hsi" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={hsiBg} alt="" className="size-full object-cover opacity-10" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionHeader
          eyebrow="HSI Academic"
          title="Akademik HSI"
          description="Belajar ilmu syar'i di SMA IT HSI Boarding School — memadukan ilmu agama, akademik, dan teknologi."
        />

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-1 reveal">
            <div className="glass rounded-3xl p-6 h-full relative overflow-hidden">
              <div className="absolute -top-10 -right-10 size-40 rounded-full bg-emerald-deep/30 blur-3xl" />
              <h3 className="font-display text-xl font-bold mb-1 text-gradient">Mata Pelajaran</h3>
              <p className="text-xs text-muted-foreground mb-5">Pilar ilmu yang sedang ditekuni</p>
              <div className="space-y-2">
                {subjects.map((s) => (
                  <div key={s.name} className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-mint-gradient/20 grid place-items-center">
                        <BookMarked className="size-4 text-primary" />
                      </div>
                      <span className="font-semibold text-sm">{s.name}</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-mint-gradient/20 text-primary font-mono">{s.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <div
                key={c.title}
                className="reveal glass rounded-2xl p-5 hover:shadow-glow hover:-translate-y-1 transition-all"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="size-11 rounded-xl bg-emerald-deep/30 grid place-items-center mb-3">
                  <c.icon className="size-5 text-primary" />
                </div>
                <h4 className="font-bold mb-1">{c.title}</h4>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
