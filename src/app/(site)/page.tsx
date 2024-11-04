import Faq from "@/components/faq";
import Hero from "@/components/hero";
import LatestBlogs from "@/components/latestBlogs";
import Pricing from "@/components/pricing";
import SiteSteps from "@/components/siteSteps";
import ThemeExamples from "@/components/themeExamples";
import WaveSection from "@/components/waveSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SiteSteps />
      <WaveSection />
      <ThemeExamples />
      <LatestBlogs />
      <Pricing />
      <Faq />
    </main>
  );
}
