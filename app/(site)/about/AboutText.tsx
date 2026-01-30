import { getAboutPage } from "@/sanity/sanity.query";
import { AboutPageType } from "@/types";

export default async function AboutText() {
  const aboutPage: AboutPageType = await getAboutPage();

  return (
    <section className="bg-charcoal-dark about mx-auto container max-w-xl p-standard-mobile md:p-standard">
      <h2 className="text-center font-display text-3xl md:text-4xl font-semibold mb-4 md:mb-8">
        {aboutPage.about.aboutHeadline}
      </h2>
      <p className="text-center text-base md:text-lg text-grey-400 mb-8 max-w-4xl mx-auto whitespace-pre-line">
        {aboutPage.about.aboutText}
      </p>
    </section>
  );
}