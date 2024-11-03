import Faq from "@/components/faq";
import Hero from "@/components/hero";
import LatestBlogs from "@/components/latestBlogs";
import Pricing from "@/components/pricing";
import ThemeExamples from "@/components/themeExamples";

export default function Home() {
  return (
    <main>
      <Hero />
      <ThemeExamples />
      <LatestBlogs />
      <Pricing />
      <Faq />
    </main>
  );
}
