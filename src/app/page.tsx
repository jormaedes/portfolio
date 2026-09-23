import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="relative w-full h-screen h-dvh overflow-hidden">
      <HeroSection />
      <Header />
    </main>
  );
}