import HomeBanner from "@/components/home-page/HomeBanner";
import { HomeHeroSection } from "@/components/home-page/HomeHeroSection";

export default function Home() {
  return (
    <div className="w-full">
      <HomeBanner></HomeBanner>
      <HomeHeroSection></HomeHeroSection>
    </div>
  );
}
