import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import ThemeExamples from "@/components/themeExamples";
import WaveSection from "@/components/waveSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WaveSection />
      <ThemeExamples />
      <Testimonials />
      <Pricing />
      <Faq />
    </main>
  );
}
