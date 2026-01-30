import { getAboutPage } from "@/sanity/sanity.query";
import type { AboutPageType } from "@/types";
import { urlFor } from "@/sanity/lib/image";

export default async function AboutHero() {
  const aboutPage: AboutPageType | null = await getAboutPage();
  if (!aboutPage?.hero) return null;

  const bgUrl = aboutPage.hero.bgImage
    ? urlFor(aboutPage.hero.bgImage)
        .width(2400)
        .height(1350)
        .fit("crop")
        .auto("format")
        .url()
    : aboutPage.hero.bgImage;

  return (
    <section className="bg-charcoal-dark">
      <div
        className="h-[85vh] md:h-[60vh] relative bg-cover bg-center"
        style={bgUrl ? { backgroundImage: `url(${bgUrl})` } : undefined}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[3px] bg-black/40">
          <div className="h-full flex items-center justify-center flex-col text-text-main">
            <div className="container max-w-xl p-standard-mobile md:p-standard mx-auto">
              <h1 className="font-display text-4xl md:text-5xl lg:text-5xl py-6 font-semibold tracking-tight text-center whitespace-pre-line">
                {aboutPage.hero.headline}
              </h1>
              <div className="max-w-[840px] m-auto">
                <p className="pb-8 md:pb-12 text-xl max-w-xl md:text-xl text-center whitespace-pre-line">
                  {aboutPage.hero.subhead}
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}