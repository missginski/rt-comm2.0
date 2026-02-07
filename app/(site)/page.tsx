import HomeHero from "./components/sections/home/HomeHero";
import StatsStrip from "./components/sections/home/StatsStrip";
import { ServicesPreview } from "./components/sections/home/ServicesPreview";
import ValueProps from "./components/sections/home/ValProps";
// import FeaturedProjects from "./components/sections/home/FeaturedProjects";
// import ContactSection from "./components/sections/home/ContactSection";
import HomeAbout from "./components/sections/home/HomeAbout";
import ContactBanner from "./components/sections/home/ContactBanner";

export const metadata = {
  title: "Real-Time Communications",
  description: "Reliable installation, splicing, and testing for critical infrastructure.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {

  return (
    <main className="min-h-screen bg-charcoal-dark">
      <div className="bg-color-background text-color-foreground bg-[radial-gradient(ellipse_at_top,rgba(232,66,58,0.10),transparent_70%)]">
        <HomeHero />
        <HomeAbout />
        <StatsStrip />
        <ServicesPreview />
        <ValueProps />
        {/* <FeaturedProjects /> */}
        {/* <ContactSection /> */}
        <ContactBanner />
      </div>
    </main>
  )
}
