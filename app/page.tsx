"use client"
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Service from "@/components/service/Service";
import Skills from "@/components/skills/Skills";
import Blog from "@/components/blog/Blog";
import Responsive from "@/components/navbar/Responsive";
import Contact from "@/components/contact/Contact";
export default function Home() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    easing: "ease",
    once: true,
    anchorPlacement: "top-bottom",
  });
  setTimeout(() => {
    AOS.refresh();
  }, 500);
}, []);

  return (
    <div >
      <Responsive />
      <Hero />
      <Service />
      <Skills />
      <Projects />
      <Blog />
      <Contact />

    </div>
  );
}
