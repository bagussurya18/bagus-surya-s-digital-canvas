import { Mail, MessageCircle, Instagram, Github, MapPin, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useState } from "react";

const contacts = [
  { icon: Mail, label: "Email", value: "bagussurya@email.com", href: "mailto:bagussurya@email.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+62 812-3456-7890", href: "https://wa.me/6281234567890" },
  { icon: Instagram, label: "Instagram", value: "@bagussurya_", href: "https://instagram.com" },
  { icon: Github, label: "GitHub", value: "github.com/bagussurya", href: "https://github.com" },
  { icon: MapPin, label: "Lokasi", value: "Indonesia", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Contact"
          title="Mari Berkolaborasi"
          description="Punya project, ide, atau ingin sekedar berkenalan? Saya selalu terbuka untuk obrolan baru."
        />

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-3">
            {contacts.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                className="reveal glass rounded-2xl p-4 flex items-center gap-4 hover:shadow-glow hover:-translate-y-0.5 transition-all"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="size-11 rounded-xl bg-mint-gradient grid place-items-center shadow-glow shrink-0">
                  <c.icon className="size-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-semibold truncate">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="lg:col-span-3 reveal glass rounded-3xl p-6 md:p-8 space-y-4"
          >
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Nama</label>
              <input required className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary outline-none transition-colors" placeholder="Nama Anda" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
              <input required type="email" className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary outline-none transition-colors" placeholder="email@contoh.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Pesan</label>
              <textarea required rows={5} className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary outline-none transition-colors resize-none" placeholder="Tulis pesan Anda di sini..." />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-mint-gradient text-primary-foreground font-semibold hover:shadow-glow transition-all"
            >
              {sent ? "✓ Terkirim!" : <>Kirim Pesan <Send className="size-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
