import { Mic, BookOpen, MessageCircle, PenLine, Languages, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: Mic, title: "English Presentation", desc: "Presentasi bertema teknologi dan pendidikan di kelas internasional.", skill: "Speaking, Public Speaking", score: "A" },
  { icon: BookOpen, title: "TOEFL Practice Project", desc: "Latihan dan simulasi TOEFL ITP secara berkala.", skill: "Listening, Reading, Grammar", score: "Score 520+" },
  { icon: MessageCircle, title: "English Conversation", desc: "Daily conversation dengan native speaker via online meet.", skill: "Speaking, Listening", score: "Fluent" },
  { icon: PenLine, title: "English Essay Writing", desc: "Menulis essay opini dan argumentatif tentang isu pendidikan.", skill: "Writing, Vocabulary", score: "A-" },
  { icon: Languages, title: "Vocabulary Project", desc: "Membangun database 1000+ vocabulary tematik untuk belajar.", skill: "Vocabulary, Memorization", score: "1000+ words" },
  { icon: Award, title: "English Speech Contest", desc: "Peserta kompetisi pidato bahasa Inggris tingkat sekolah.", skill: "Confidence, Delivery", score: "Top 5" },
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
