import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Service from "@/components/service/Service";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div >
      <Hero />
      <Service />
      <Skills />
      <Projects />
    </div>
  );
}
