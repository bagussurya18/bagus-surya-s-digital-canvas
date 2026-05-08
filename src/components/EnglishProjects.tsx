import { Mic, BookOpen, MessageCircle, PenLine, Languages, Award, Eye } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "./ui/dialog";

type Item = {
  icon: typeof Mic;
  title: string;
  desc: string;
  skill: string;
  score: string;
  detail?: { heading: string; body: string; list?: string[] };
};

const items: Item[] = [
  { icon: Mic, title: "English Presentation", desc: "Presentasi bertema teknologi dan pendidikan di kelas internasional.", skill: "Speaking, Public Speaking", score: "A" },
  { icon: BookOpen, title: "TOEFL Practice Project", desc: "Latihan dan simulasi TOEFL ITP secara berkala.", skill: "Listening, Reading, Grammar", score: "Score 520+" },
  { icon: MessageCircle, title: "English Conversation", desc: "Daily conversation dengan native speaker via online meet.", skill: "Speaking, Listening", score: "Fluent" },
  { icon: PenLine, title: "English Essay Writing", desc: "Menulis essay opini dan argumentatif tentang isu pendidikan.", skill: "Writing, Vocabulary", score: "A-" },
  {
    icon: Languages,
    title: "Vocabulary Project",
    desc: "Membangun database 1000+ vocabulary tematik untuk belajar.",
    skill: "Vocabulary, Memorization",
    score: "1000+ words",
    detail: {
      heading: "Database Vocabulary Tematik",
      body: "Project ini berisi kumpulan kosakata bahasa Inggris yang dikelompokkan berdasarkan tema agar mudah dihafal dan diaplikasikan dalam percakapan sehari-hari.",
      list: [
        "Tema Daily Activity — 200+ kata",
        "Tema Education & School — 250+ kata",
        "Tema Technology & IT — 200+ kata",
        "Tema Islamic Vocabulary — 200+ kata",
        "Tema Travel & Culture — 150+ kata",
      ],
    },
  },
  { icon: Award, title: "English Speech Contest", desc: "Peserta kompetisi pidato bahasa Inggris tingkat sekolah.", skill: "Confidence, Delivery", score: "Top 5" },
  { icon: BookOpen, title: "English Story Project", desc: "Menulis dan membacakan cerita pendek berbahasa Inggris bertema inspiratif.", skill: "Writing, Storytelling, Reading", score: "A" },
];

export function EnglishProjects() {
  return (
    <section id="english" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto px-4 relative">
        <SectionHeader
          eyebrow="English Projects"
          title="My English Journey"
          description="Karena bahasa Inggris adalah jendela ke dunia — saya melatihnya melalui project nyata."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal glass rounded-3xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="size-12 rounded-2xl bg-mint-gradient grid place-items-center shadow-glow">
                  <it.icon className="size-5 text-primary-foreground" />
                </div>
                <span className="text-xs px-2 py-1 rounded-full glass font-mono text-primary">{it.score}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-gradient transition-all">{it.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{it.desc}</p>
              <div className="text-xs text-muted-foreground border-t border-border pt-3">
                <span className="text-primary font-semibold">Skills:</span> {it.skill}
              </div>
              {it.detail && (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="mt-4 w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-mint-gradient text-primary-foreground text-sm font-semibold hover:shadow-glow transition-all">
                      <Eye className="size-3.5" /> Lihat Detail
                    </button>
                  </DialogTrigger>
                  <DialogContent className="glass border-primary/30">
                    <DialogHeader>
                      <DialogTitle className="text-gradient">{it.detail.heading}</DialogTitle>
                      <DialogDescription>{it.detail.body}</DialogDescription>
                    </DialogHeader>
                    {it.detail.list && (
                      <ul className="space-y-2 mt-2">
                        {it.detail.list.map((l) => (
                          <li key={l} className="flex items-start gap-2 text-sm">
                            <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span>{l}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </DialogContent>
                </Dialog>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
