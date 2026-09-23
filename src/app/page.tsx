import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/About"
export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
    </main>
  );
}