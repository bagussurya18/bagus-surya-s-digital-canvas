import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import projectImg from "@/assets/project-it.jpg";

const projects = [
  { title: "Website Absensi Sekolah", desc: "Sistem absensi siswa berbasis web dengan fitur QR code dan rekap otomatis.", tech: ["React", "Node.js", "MySQL"] },
  { title: "Sistem Jadwal Pelajaran", desc: "Aplikasi pengelola jadwal pelajaran dinamis dengan notifikasi real-time.", tech: ["Next.js", "Tailwind", "Supabase"] },
  { title: "Aplikasi Perizinan Siswa", desc: "Platform pengajuan izin siswa secara digital dengan approval guru.", tech: ["React", "Express", "MongoDB"] },
  { title: "Dashboard Admin Sekolah", desc: "Dashboard analytics untuk monitoring data siswa, guru, dan kegiatan.", tech: ["Vue", "Chart.js", "Firebase"] },
  { title: "Website SMA IT HSI Boarding", desc: "Company profile sekolah dengan CMS dan informasi PPDB modern.", tech: ["Next.js", "Sanity", "Vercel"] },
  { title: "Sistem Data Siswa Digital", desc: "Database terpusat untuk pengelolaan data siswa, nilai, dan rapor.", tech: ["Laravel", "PostgreSQL", "Inertia"] },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Project IT"
          title="My IT Projects"
          description="Karya-karya digital yang saya bangun untuk menyelesaikan masalah nyata di sekitar saya."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal glass rounded-3xl overflow-hidden hover:shadow-glow hover:-translate-y-2 transition-all group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={projectImg}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="size-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-1 rounded-full glass text-[10px] uppercase tracking-wider font-semibold">
                  Project #{String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-gradient transition-all">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href="#" className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-mint-gradient text-primary-foreground text-sm font-semibold hover:shadow-glow transition-all">
                    <ExternalLink className="size-3.5" /> Demo
                  </a>
                  <a href="#" className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg glass text-sm font-semibold hover:shadow-glow transition-all">
                    <Github className="size-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
