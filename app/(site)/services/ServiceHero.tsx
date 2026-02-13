import { getServicesPage } from "@/sanity/sanity.query";
import type { ServicesPageType } from "@/types";
import { urlFor } from "@/sanity/lib/image";

export default async function ServiceHero() {
  const servicesPage: ServicesPageType | null = await getServicesPage();
  if (!servicesPage) return null;

  const bgUrl = servicesPage.hero.bgImage
    ? urlFor(servicesPage.hero.bgImage)
        .width(2400)
        .height(1350)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  return (
    <section className="bg-charcoal-dark">
      <div
        className="h-[55vh] md:h-[60vh] relative bg-cover bg-center"
        style={bgUrl ? { backgroundImage: `url(${bgUrl})` } : undefined}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[3px] bg-black/40">
          <div className="h-full flex items-center justify-center flex-col text-text-main">
            <div className="container max-w-xl p-standard-mobile md:p-standard mx-auto">
              <h1 className="font-display text-4xl md:text-5xl lg:text-5xl py-6 font-semibold tracking-tight text-center sm:whitespace-pre-line whitespace-normal">
                {servicesPage.hero.headline}
              </h1>
              <div className="max-w-[840px] m-auto">
                <p className="max-w-xl  text-lg md:text-xl text-center sm:whitespace-pre-line whitespace-normal">
                  {servicesPage.hero.subhead}
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}