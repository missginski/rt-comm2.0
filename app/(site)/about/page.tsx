import AboutHero from "./AboutHero"
import AboutText from "./AboutText"
import Certifications from "./Certifications"
import ContactBanner from "../components/sections/home/ContactBanner"

export default function AboutPage() {

  return(
    <main>
      <AboutHero />
      <AboutText />
      <Certifications />
      <ContactBanner />
    </main>
  )
}