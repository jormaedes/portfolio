import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/About"
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <Services />
      <Projects />
    </main>
  );
}