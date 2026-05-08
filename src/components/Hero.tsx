import { Mail, ArrowRight, Github, Instagram, Code2 } from "lucide-react";
import profile from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-32 -left-20 size-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 size-96 rounded-full bg-emerald-deep/30 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium mb-6">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              Available for collaboration
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Hi, I'm <span className="text-gradient">Bagus Surya</span>
            </h1>
            <div className="mt-4 text-lg md:text-xl text-muted-foreground font-mono">
              <span className="text-primary">&lt;</span> Student
              <span className="mx-2 text-primary">/</span> IT Enthusiast
              <span className="mx-2 text-primary">/</span> HSI Academic
              <span className="text-primary"> &gt;</span>
            </div>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
              "Belajar tanpa henti, berkarya dengan hati, dan terus berproses menjadi versi terbaik diri — di dunia, di akhirat."
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-mint-gradient text-primary-foreground font-semibold hover:shadow-glow transition-all">
                Lihat Project
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/cv-bagus-surya.pdf" download className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass font-semibold hover:shadow-glow transition-all">
                <Download className="size-4" /> Download CV
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass font-semibold hover:shadow-glow transition-all">
                <Mail className="size-4" /> Hubungi Saya
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex gap-2">
                {[Github, Instagram, Code2].map((Icon, i) => (
                  <a key={i} href="#contact" className="size-10 grid place-items-center rounded-xl glass hover:shadow-glow hover:-translate-y-0.5 transition-all">
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { n: "20+", l: "Projects" },
                  { n: "5+", l: "Awards" },
                  { n: "3+", l: "Years" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display font-bold text-lg text-gradient">{s.n}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-full bg-mint-gradient blur-3xl opacity-30 animate-blob" />
              <div className="absolute inset-4 rounded-full border border-primary/30 animate-spin-slow" />
              <div className="absolute inset-10 rounded-full border border-primary/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "24s" }} />
              <div className="relative size-full rounded-3xl overflow-hidden glass shadow-card animate-float">
                <img
                  src={profile}
                  alt="Bagus Surya - Portfolio profile"
                  width={768}
                  height={768}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 flex items-center gap-3">
                  <div className="size-2 rounded-full bg-primary animate-pulse" />
                  <div className="text-xs">
                    <div className="font-semibold">Currently building</div>
                    <div className="text-muted-foreground">School Attendance System</div>
                  </div>
                </div>
              </div>
              {/* floating badges */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl p-3 shadow-card animate-float" style={{ animationDelay: "1s" }}>
                <Code2 className="size-5 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-3 py-2 shadow-card text-xs font-mono animate-float" style={{ animationDelay: "2s" }}>
                <span className="text-primary">$</span> npm run dream
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
