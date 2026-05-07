import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { EnglishProjects } from "@/components/EnglishProjects";
import { HSI } from "@/components/HSI";
import { Journey } from "@/components/Journey";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bagus Surya Portfolio — Student | IT Enthusiast | HSI Academic" },
      { name: "description", content: "Portfolio resmi Bagus Surya — pelajar SMA IT HSI Boarding School yang aktif di dunia IT, Bahasa Inggris, dan ilmu syar'i. Lihat project, skill, dan pencapaian saya." },
      { property: "og:title", content: "Bagus Surya Portfolio" },
      { property: "og:description", content: "Student | IT Enthusiast | HSI Academic. Modern portfolio with projects, skills, and achievements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EnglishProjects />
        <HSI />
        <Journey />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
