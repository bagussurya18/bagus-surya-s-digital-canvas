import { Calendar, MapPin, GraduationCap, Heart, Target, User } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: User, label: "Nama Lengkap", value: "Bagus Surya" },
  { icon: Calendar, label: "Tempat & Tanggal Lahir", value: "Indonesia, 2008" },
  { icon: GraduationCap, label: "Sekolah / Akademik", value: "SMA IT HSI Boarding School" },
  { icon: MapPin, label: "Lokasi", value: "Indonesia" },
  { icon: Heart, label: "Minat & Passion", value: "Web Development, UI/UX, Public Speaking" },
  { icon: Target, label: "Tujuan", value: "Menjadi Full-Stack Developer & Da'i Digital" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Tentang Saya"
          title="About Me"
          description="Seorang pelajar yang mencintai teknologi, ilmu, dan bahasa — bertekad menjadikan setiap baris kode dan setiap kata bermanfaat."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 reveal">
            <div className="glass rounded-3xl p-6 shadow-card h-full">
              <div className="aspect-square rounded-2xl bg-mint-gradient/20 grid-bg grid place-items-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-emerald-deep/40" />
                <div className="relative text-7xl font-display font-bold text-gradient">BS</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Bagus Surya</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pelajar SMA IT HSI Boarding School yang aktif di dunia IT, Bahasa Inggris, dan ilmu syar'i. Saya percaya bahwa teknologi adalah alat untuk menebar manfaat yang lebih luas.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <div
                key={it.label}
                className="reveal glass rounded-2xl p-5 hover:shadow-glow hover:-translate-y-1 transition-all group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="size-10 rounded-xl bg-mint-gradient/20 grid place-items-center mb-3 group-hover:bg-mint-gradient transition-colors">
                  <it.icon className="size-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{it.label}</div>
                <div className="font-semibold">{it.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
