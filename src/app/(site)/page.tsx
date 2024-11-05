import Faq from "@/components/faq";
import Hero from "@/components/hero";

import Pricing from "@/components/pricing";
import SiteSteps from "@/components/siteSteps";
import Testimonials from "@/components/testimonials";
import ThemeExamples from "@/components/themeExamples";
import WaveSection from "@/components/waveSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SiteSteps />
      <WaveSection />
      <ThemeExamples />

      <Testimonials />
      <Pricing />
      <Faq />
    </main>
  );
}
