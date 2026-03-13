import HomeHero from "./components/sections/home/HomeHero";
import StatsStrip from "./components/sections/home/StatsStrip";
import { ServicesPreview } from "./components/sections/home/ServicesPreview";
import ValueProps from "./components/sections/home/ValProps";
import HomeAbout from "./components/sections/home/HomeAbout";
import ContactBanner from "./components/sections/home/ContactBanner";

export const metadata = {
  title: "Real-Time Communications",
  description: "Reliable installation, splicing, and testing for critical infrastructure.",
};

export default function Home() {

  return (
    <main className="min-h-screen bg-charcoal-dark">
      <div className="bg-color-background text-color-foreground">
        <HomeHero />
        <HomeAbout />
        <StatsStrip />
        <ServicesPreview />
        <ValueProps />
        <ContactBanner />
      </div>
    </main>
  )
}
